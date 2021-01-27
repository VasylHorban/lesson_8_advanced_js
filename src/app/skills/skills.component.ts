import { Component, OnInit, Input } from '@angular/core';

import { UserService} from '../user.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills = [];
  public isEdit : boolean = false;
  public isChanged : boolean = false;

  @Input('globalEdit') globalEdit : boolean;

  constructor( private userService : UserService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.skills = this.userService.get(1);
  }
  switch(e): void{
    let textArea = e.target.parentNode.lastChild;
    if(textArea.style.display !== 'none'){
      textArea.style.display = 'none'
    }else{
      textArea.style.display = 'block'
    }
  }

  changeEdit() {
    this.isEdit = true;
  }
  onInput(){
    this.isChanged = true;
  }
  remove(){
    this.isChanged = true;
    this.skills.forEach(elem => elem.description = ' ');
  }
  save(){
    let data = this.skills.slice();
    console.log(data)
    this.userService.changeSkills(data);
    this.getData();
    this.isEdit = false;
    this.isChanged = false;
    
}
  

}
