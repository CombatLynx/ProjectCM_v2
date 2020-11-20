import { Injectable } from '@angular/core';
import { SONGS } from '../data-array';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  getSongs(groupId: number) {
    if (!groupId) {
      return SONGS;
    } else {
      return SONGS.filter((s) => s.groupId === groupId);
    }
  }
}
