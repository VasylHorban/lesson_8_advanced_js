import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {
  public scripts : string[] = ['Ви справді хочете видалити попередні дані?','Ви справді хочете зберегти дані?' ];
  public script : string;
  public respond : boolean;
  @Input('scriptIndex') scriptIndex : number;
  @Output() respondEvent = new EventEmitter();
  @Output() canselEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.script = this.scripts[this.scriptIndex];
    
  }

  accept() {
    this.respond = true;
    this.respondEvent.emit(this.respond);
  }

  cansel(){
    this.respond = false;
    this.respondEvent.emit(this.respond);
  }
  
}
