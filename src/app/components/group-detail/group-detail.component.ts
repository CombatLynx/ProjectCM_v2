import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Group } from '../../interfaces/group.interfaces';
import { GroupService } from '../../services/group.service';
import {PlayListService} from '../../services/play-list.service';
import {SongService} from '../../services/song.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: [ './group-detail.component.css' ]
})
export class GroupDetailComponent implements OnInit {
  group: Group;

  constructor(
    private route: ActivatedRoute,
    public groupService: GroupService,
    public playListService: PlayListService,
    public songService: SongService
  ) {}

  ngOnInit(): void {
    this.getGroup();
  }

  getGroup(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.groupService.getGroup(id)
      .subscribe(group => this.group = group);
  }
}
