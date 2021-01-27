import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


import { UserService } from '../user.service';

@Component({
  selector: 'app-project-cart',
  templateUrl: './project-cart.component.html',
  styleUrls: ['./project-cart.component.css']
})
export class ProjectCartComponent implements OnInit {
  public isEdit : boolean = false;
  public isChanged : boolean = false;
  public inputValue : string;
  @Input('project') project;
  @Input('index') index : number;
  @Input('globalEdit') globalEdit : boolean;

  @Output() updateEvent = new EventEmitter();
  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  changeEdit(){
    this.isEdit = true;
  }

  onInput(data: string){
    this.isChanged = true;
    if(data !== undefined) this.inputValue = data;
  }

  remove(){
    this.userService.removeProject(this.index);
    this.updateEvent.emit();
  }

  save(){
      let data = {
        name : this.project.name,
        img : this.inputValue || this.project.img,
        description : this.project.description

      }
      this.userService.updateProject(this.index, data)
      console.log(data)
      this.isEdit = false;
      this.isChanged = false;
      this.updateEvent.emit();    
  }

}
