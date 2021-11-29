import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-test-child',
  templateUrl: './my-test-child.component.html',
  styleUrls: ['./my-test-child.component.scss']
})
export class MyTestChildComponent implements OnInit {
  @Input() ParentItem = "";
  strParentVar= "I am Child component.pass to Parent";

  constructor() { }

  ngOnInit(): void {
  }
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

}
