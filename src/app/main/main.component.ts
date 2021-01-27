import { Component, Input, OnInit } from '@angular/core';

import { UserService } from '../user.service';
 
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public user;
  
  @Input() globalEdit : boolean;
  @Input('amounProjects') amounProjects : number;

  public isEdit : boolean = false;
  public isChanged : boolean = false;
  
  private inputValue : string = '';

  constructor( private userService : UserService ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.user = this.userService.get(0)[0];
  }

  changeEdit(){
    this.isEdit = true;
  }

  onInput(data: string){
    this.isChanged = true;
    this.inputValue = data;
  }

  remove(){
    this.isChanged = true;
    this.user.avatar = ' ';
  }

  save(){
    if(this.inputValue !== undefined) {
      this.userService.changeAvatar(this.inputValue);
      this.getData();
      this.isEdit = false;
      this.isChanged = false;
    }
  }

}
