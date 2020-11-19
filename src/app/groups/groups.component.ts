import { Component, OnInit } from '@angular/core';

import { Group } from '../interfaces/group__and__song';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: Group[];

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups(): void {
    this.groupService.getGroups()
    .subscribe(groups => this.groups = groups);
  }
}
