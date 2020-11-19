import { Component, OnInit } from '@angular/core';
import { Group } from '../interfaces/group__and__song';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  groups: Group[] = [];

  constructor(public groupService: GroupService) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups(): void {
    this.groupService.getGroups()
      .subscribe(groups => this.groups = groups.slice(0, 5));
  }
}
