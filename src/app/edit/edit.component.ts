import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input('globalEdit') globalEdit : boolean;
  @Output() changeEdit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  changing(): void{
    this.globalEdit = !this.globalEdit;
    this.changeEdit.emit()
  }

}
