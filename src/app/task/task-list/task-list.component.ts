import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  @Output() taskClick = new EventEmitter();

  onTaskClick(taskId: Task['id']) {
    this.taskClick.emit(taskId);
  }
}
