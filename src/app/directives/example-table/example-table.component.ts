import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-table',
  templateUrl: './example-table.component.html',
  styleUrls: ['./example-table.component.scss']
})
export class ExampleTableComponent implements OnInit {

  script = `
$('.table tr:not(.disabled)').on('click', ({ currentTarget }) => alert('Hi from ' + currentTarget.children[1].textContent));
`;

  constructor() { }

  ngOnInit() {
  }

}
