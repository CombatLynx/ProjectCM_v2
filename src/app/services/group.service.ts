import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Group} from '../interfaces/group.interfaces';
import { GROUPS } from '../data-array';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  getGroups(): Observable<Group[]> {
    return of(GROUPS);
  }

  getGroup(id: number): Observable<Group> {
    return of(GROUPS.find(group => group.id === id));
  }
}
