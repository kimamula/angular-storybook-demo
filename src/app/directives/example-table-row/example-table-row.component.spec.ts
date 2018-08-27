import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTableRowComponent } from './example-table-row.component';

describe('ExampleTableRowComponent', () => {
  let component: ExampleTableRowComponent;
  let fixture: ComponentFixture<ExampleTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
