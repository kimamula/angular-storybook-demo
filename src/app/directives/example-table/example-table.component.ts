import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { User } from '../../model/User';

@Component({
  selector: 'app-example-table',
  templateUrl: './example-table.component.html',
  styleUrls: ['./example-table.component.scss']
})
export class ExampleTableComponent implements OnInit {
  @Input() users: User[];
  @Input() disabledUserIds: number[] = [];
  @ViewChild('content') content: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  trackByFn(index: number, { id }: User) {
    return id;
  }

  onClick(user: User) {
    alert(`Hi from ${user.firstName}`);
  }

}
