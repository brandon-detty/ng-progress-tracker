import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  ngOnInit(): void {
    this.tasks = [
      { id: 1, title: 'My First Task' },
      { id: 2, title: 'Another Thing to Do' },
    ];
  }
}
