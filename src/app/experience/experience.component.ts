import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserService } from '../user.service'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public projects;
  
  @Input('globalEdit') globalEdit : boolean;
  @Output() updateEvent = new EventEmitter();
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getProjects();
  }
  getProjects(){
    this.projects = this.userService.get(2);
    this.updateEvent.emit();
  }

}
