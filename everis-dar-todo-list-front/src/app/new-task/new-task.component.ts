import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

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

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  saveTask(): void {
    alert('backend not implemented yet :-(');
    this.goBack();
  }

}
