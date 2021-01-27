import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-edit-btns',
  templateUrl: './edit-btns.component.html',
  styleUrls: ['./edit-btns.component.css']
})
export class EditBtnsComponent implements OnInit {
  public permissionToEdit : boolean = false;
  public openModal : boolean = false;
  public scriptIndex : number;
  @Input('permissionToSave') permissionToSave : boolean;

  @Output() removeEvent = new EventEmitter();
  @Output() saveEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  askRemove(){
    this.openModal = true;
    this.scriptIndex = 0;
  }
  askSave(){
    this.openModal = true;
    this.scriptIndex = 1;
  }

  cheking(data: boolean){
    this.openModal = false;
    if(data){
      if(this.scriptIndex === 1){
        this.save();
      }else {
        this.remove();
      }
    }else{
      return;
    }
  }

  save(){
    this.permissionToEdit = false;
    this.saveEvent.emit();
  }
  remove(){
    this.removeEvent.emit();
  }

  edit(){
    this.permissionToEdit = true;
    this.editEvent.emit();
  }

}
