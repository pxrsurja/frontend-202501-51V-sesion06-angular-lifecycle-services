import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  addTask(title: string) {
    const current = this.tasksSubject.value;
    this.tasksSubject.next([...current, { title, completed: false }]);
  }

  removeTask(task: Task) {
    const current = this.tasksSubject.value;
    this.tasksSubject.next(current.filter(t => t !== task));
  }

  toggleTask(task: Task) {
    const current = this.tasksSubject.value;
    this.tasksSubject.next(
      current.map(t =>
        t === task ? { ...t, completed: !t.completed } : t
      )
    );
  }
}
