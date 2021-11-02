import { Component, OnInit } from '@angular/core';
import {TasksService} from '../tasks.service';
import {Tasks} from '../tasks'

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  isBackDrop=true;
  formData=new FormData();
  setBackDrop(){
    this.isBackDrop=false
  }
  tasks:Tasks=new Tasks();
  constructor(private tasksService:TasksService) { }

  ngOnInit(): void {
  }
  addTask(){
    this.tasksService.createtask(this.formData).subscribe(err=>{
      console.log(err)
      alert("created : "+err.status)
    });
  };
  onSubmit(){
    // const formData=new FormData();
    this.formData.append("message",this.tasks.message);
    this.formData.append("due_date",this.tasks.due_date.toString());
    this.formData.append("priority",this.tasks.priority);
    this.formData.append("assigned_to",this.tasks.assigned_to);
    
    this.isBackDrop=!this.isBackDrop;
    this.addTask();
  }

}
