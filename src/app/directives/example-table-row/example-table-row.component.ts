import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../model/User';

@Component({
  selector: '[appExampleTableRow]',
  templateUrl: './example-table-row.component.html',
  styleUrls: ['./example-table-row.component.scss']
})
export class ExampleTableRowComponent implements OnInit {
  @Input() rowIndex: number;
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
