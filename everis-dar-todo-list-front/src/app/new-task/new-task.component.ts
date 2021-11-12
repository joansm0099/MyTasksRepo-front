import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  // Copiat de 'task-list.component'. Moure a 'task.service' per no repetir.
  taskStatus = [
    {name: 'Pending', value: 'PENDING'},
    {name: 'In progress', value: 'IN_PROGRESS'},
    {name: 'Completed', value: 'COMPLETED'}
  ];

  constructor(
    private location: Location,
    private taskService: TaskService) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  saveTask(title: string, description: string, status: string): void {
    title = title.trim();
    description = description.trim();
    if (!title || !description || !status) {
      alert('Please, fill all the properties of the task.');
      return;
    }
    this.taskService.addTask({
      title: title,
      description: description,
      status: status
    } as Task)
      .subscribe(task => {
        this.goBack();
      });
  }

}
