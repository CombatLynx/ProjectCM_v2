import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Group } from '../interfaces/group.interfaces';
import { Song } from '../interfaces/song.interfaces';
import { GROUPS, SONGS } from '../data__array';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  playListArray: Set<Song> = new Set<Song>();

  getActualPlayList() {
    return this.playListArray;
  }

  updatePlayList(playListArray: Set<Song>) {
    this.playListArray = playListArray;
  }

  getGroups(): Observable<Group[]> {
    return of(GROUPS);
  }

  getGroup(id: number): Observable<Group> {
    return of(GROUPS.find(group => group.id === id));
  }

  getSongs(groupId: number) {
    if (!groupId) {
      return SONGS;
    } else {
      return SONGS.filter((s) => s.groupId === groupId);
    }
  }
}
