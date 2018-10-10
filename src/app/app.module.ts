import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { TaskComponent } from 'src/app/task/task-list.component';
import { AssignmentService } from 'src/app/task/assignment.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AssignmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
