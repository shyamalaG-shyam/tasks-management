import { Component, OnInit } from '@angular/core';
import {Tasks} from '../tasks';
import {TasksService} from '../tasks.service'
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks:Tasks[]
  // users:User[]
  task=new Tasks()
  isUpadate=false
  updatingTask:Tasks
  formData=new FormData();
  constructor(private tasksService:TasksService) { }

  ngOnInit(): void {
    this.getTasks()
  }
  private getTasks(){ 
    this.tasksService.getTasksList().subscribe((data:any)=>{this.tasks=data.tasks;
       console.log(data.tasks)}) 
  }
  loadUpdate(updateTAsk){
    this.isUpadate=true;
    this.updatingTask=updateTAsk;
  }
  deleteTask(id){
    this.formData.append("taskid",id)
    this.tasksService.deleteTaskById(this.formData).subscribe(err=>{
      alert(err.message)
      console.log(err)
      this.getTasks();
    });   
  }
  updatePriority(){
    this.tasksService.updatetask(this.formData).subscribe(err=>{ console.log(err)
    this.getTasks()})
  }
  dropHigh(event: CdkDragDrop<Tasks[]>) {
   this.task=event.previousContainer.data[event.previousIndex]
    this.formData.append("message",this.task.message)
    this.formData.append("assigned_to",this.task.assigned_to)
    this.formData.append("due_date",this.task.due_date)
    this.formData.append("priority","1")
    this.updatePriority();
  }
  dropMed(event: CdkDragDrop<Tasks[]>) {
    this.task=event.previousContainer.data[event.previousIndex]
    this.formData.append("message",this.task.message)
    this.formData.append("assigned_to",this.task.assigned_to)
    this.formData.append("due_date",this.task.due_date)
    this.formData.append("priority","2")
    this.updatePriority();
  }
  dropLow(event: CdkDragDrop<Tasks[]>) {
    this.task=event.previousContainer.data[event.previousIndex]
    this.formData.append("message",this.task.message)
    this.formData.append("assigned_to",this.task.assigned_to)
    this.formData.append("due_date",this.task.due_date)
    this.formData.append("priority","3")
    // this.updatePriority();
  }
}
