import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/models/Task';

@Component({
  selector: 'app-task-browser',
  templateUrl: './task-browser.component.html',
  styleUrls: ['./task-browser.component.scss'],
})
export class TaskBrowserComponent implements OnInit {
  tasks: Task[] = [];
  selectedTask?: Task;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((t) => (this.tasks = t));
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
