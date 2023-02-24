import { Component, Input } from '@angular/core';
import { Task } from 'src/models/Task';

@Component({
  selector: 'app-task-overview',
  templateUrl: './task-overview.component.html',
  styleUrls: ['./task-overview.component.scss'],
})
export class TaskOverviewComponent {
  @Input() task: Task;

  constructor() {
    this.task = {} as Task;
  }
}
