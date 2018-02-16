import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

import { FilterPipe } from './pipes/filter.pipe';
import { AppComponent } from './app.component';
import { DropdownComponent } from './components/dropdown.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FilterPipe,
    DropdownComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
