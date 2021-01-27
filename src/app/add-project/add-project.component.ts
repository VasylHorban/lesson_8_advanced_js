import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})

export class AddProjectComponent implements OnInit {
  public isOpen : boolean = false;

  @Output() addEvent = new EventEmitter();
  constructor( private userService : UserService ) { }
  public newProject = {
    name : '',
    img : '',
    description : ''
  }
  ngOnInit(): void {
  }
  save(){
    this.userService.addProject(this.newProject);
    this.newProject = {
      name : '',
      img : '',
      description : ''
    }
    this.addEvent.emit();

  }
  


}
