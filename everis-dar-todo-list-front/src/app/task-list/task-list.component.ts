import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  taskStatus = [
    {name: 'Pending', value: 'PENDING'},
    {name: 'In progress', value: 'IN_PROGRESS'},
    {name: 'Completed', value: 'COMPLETED'}
  ];

  currentFilter = 'all';

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  getTasksByStatus(status: string) {
    this.currentFilter = status;
    if (status === 'all') {
      this.getTasks();
    } else {
      this.taskService.getTasksByStatus(status)
        .subscribe(tasks => this.tasks = tasks);
    }
  }

  update(task: Task, statusValue: string): void {
    task.status = statusValue;
    this.taskService.updateTask(task)
      .subscribe(() => this.getTasksByStatus(this.currentFilter));
  }

  delete(taskId: number): void {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
    this.taskService.deleteTask(taskId).subscribe();
  }

}
