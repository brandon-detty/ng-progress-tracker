import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/Task';

@Component({
  selector: 'app-task-browser',
  templateUrl: './task-browser.component.html',
  styleUrls: ['./task-browser.component.scss'],
})
export class TaskBrowserComponent implements OnInit {
  tasks: Task[] = [];
  selectedTask?: Task;

  ngOnInit(): void {
    this.tasks = [
      { id: 1, title: 'My First Task' },
      { id: 2, title: 'Another Thing to Do' },
    ];
  }

  setSelectedTask(taskId?: Task['id']) {
    if (typeof taskId !== 'number') {
      this.selectedTask = undefined;
    }
    let task = this.tasks.find((t) => taskId === t.id);
    if (typeof task !== 'undefined') {
      this.selectedTask = task;
    }
  }
}
