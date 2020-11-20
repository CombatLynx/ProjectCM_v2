import { Injectable } from '@angular/core';
import { Song } from '../interfaces/song.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlayListService {

  playListArray: Set<Song> = new Set<Song>();

  getActualPlayList() {
    return this.playListArray;
  }

  updatePlayList(playListArray: Set<Song>) {
    this.playListArray = playListArray;
  }
}
