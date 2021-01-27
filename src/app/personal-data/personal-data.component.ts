import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {
  public user : any;
  public isEdit : boolean = false;
  public isChanged : boolean = false;
  
  @Input('globalEdit') globalEdit : boolean;
  constructor( private userService : UserService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.user = this.userService.get(0)[0];
  }
  changeEdit(){
    this.isEdit = true;
  }

  onInput(){
    this.isChanged = true;
  }

  remove(){
    this.isChanged = true;
    this.user.name = ' ';
    this.user.surname = ' ';
    this.user.email = ' ';
  }

  save(){
      let data = {
        name : this.user.name,
        surname : this.user.surname,
        email : this.user.email,
      }
      this.userService.changePersonalData(data);
      this.getData();
      this.isEdit = false;
      this.isChanged = false;
      
  }

}
