import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-test-parent',
  templateUrl: './my-test-parent.component.html',
  styleUrls: ['./my-test-parent.component.scss']
})
export class MyTestParentComponent implements OnInit {
  @Output() ChildItem = new EventEmitter<string>();
  strParentVar= "I am Parent component.pass to child";
  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value:string){
    this.ChildItem.emit(value);
  }

}
