import {Component, Input, Output, OnDestroy, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { Song } from '../../interfaces/song.interfaces';

@Component({
  selector: 'app-music-panel',
  templateUrl: './music-panel.component.html',
  styleUrls: ['./music-panel.component.css']
})
export class MusicPanelComponent implements OnDestroy {

  title = 'musicAngular';
  audioObj = new Audio();
  audioEvents = [
    'ended',
    'error',
    'play',
    'playing',
    'pause',
    'timeupdate',
    'canplay',
    'loadedmetadata',
    'loadstart'
  ];

  @Input() public songs;

  @Input() playListArray: Set<Song>;

  @Output() updatePlayListEvent = new EventEmitter<Set<Song>>();

  currentTime = '00:00';
  duration = '00:00';
  seek = 0;

  public addToPlayList(song: Song): void {
    this.playListArray.add(song);
  }

  public deleteFromPlayList(song: Song): void {
    this.playListArray.delete(song);
  }

  streamObserver(url) {
    return new Observable(observer => {

      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();

      const handler = (event: Event) => {
        console.log(event);
        this.seek = this.audioObj.currentTime;
        this.duration = this.timeFormat(this.audioObj.duration);
        this.currentTime = this.timeFormat(this.audioObj.currentTime);
      };

      this.addEvent(this.audioObj, this.audioEvents, handler);

      return () => {
        this.audioObj.pause();
        this.audioObj.currentTime = 0;
        this.removeEvent(this.audioObj, this.audioEvents, handler);
      };
    });
  }

  addEvent(obj, events, handler) {
    events.forEach(event => {
      obj.addEventListener(event, handler);
    });
  }

  removeEvent(obj, events, handler) {
    events.forEach(event => {
      obj.removeEventListener(event, handler);
    });
  }

  setSeekTo(ev) {
    this.audioObj.currentTime = ev.target.value;
  }

  setVolume(ev) {
    this.audioObj.volume = ev.target.value;
    console.log(ev.target.value);
  }

  openFile(url) {
    this.streamObserver(url).subscribe(event => {
    });
  }

  play() {
    this.audioObj.play();
  }

  pause() {
    this.audioObj.pause();
  }

  stop() {
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
  }

  timeFormat(time, format = 'mm:ss') {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }

  ngOnDestroy() {
    this.stop();
    this.updatePlayListEvent.emit(this.playListArray);
  }

}