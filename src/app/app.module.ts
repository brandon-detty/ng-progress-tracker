import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskOverviewComponent } from './task/task-overview/task-overview.component';
import { TaskBrowserComponent } from './task/task-browser/task-browser.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskOverviewComponent,
    TaskBrowserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
