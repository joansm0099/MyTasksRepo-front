import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  task1 = {
    id: 1,
    title: 'Test 1',
    description: 'Create components',
    status: 'COMPLETED'
  };
  task2 = {
    id: 2,
    title: 'Test 2',
    description: 'Configure routing',
    status: 'IN_PROGRESS'
  };
  task3 = {
    id: 3,
    title: 'Test 3',
    description: 'Get data from backend',
    status: 'PENDING'
  };
  tasks = [this.task1, this.task2, this.task3];
  taskStatus = [
    {name: 'Pending', value: 'PENDING'},
    {name: 'In progress', value: 'IN_PROGRESS'},
    {name: 'Completed', value: 'COMPLETED'}
  ];

  constructor() { }

  ngOnInit() {
  }

  filterTasks(status: string) {
    if (status === 'all') {
      this.tasks = [this.task1, this.task2, this.task3];
    } else {
      // get mock data
      if (status === 'PENDING') {
        this.tasks = [this.task1];
      } else if (status === 'IN_PROGRESS') {
        this.tasks = [this.task2];
      } else if (status === 'COMPLETED') {
        this.tasks = [this.task3];
      }
    }
  }

}
