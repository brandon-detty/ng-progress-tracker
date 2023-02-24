import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from 'src/models/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    { id: 1, title: 'My First Task' },
    { id: 2, title: 'Another Thing to Do' },
  ];

  constructor() {}

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }
}
