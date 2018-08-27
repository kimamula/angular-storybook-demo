import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleTableComponent } from './directives/example-table/example-table.component';
import { ExampleTableRowComponent } from './directives/example-table-row/example-table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleTableComponent,
    ExampleTableRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
