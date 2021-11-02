import { Component, OnInit,Input } from '@angular/core';
import { Tasks } from '../tasks';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  @Input()upTask=new Tasks();
  isBackDrop=true;
  formData=new FormData();
  setBackDrop(){
    this.isBackDrop=false
  }
  constructor(private taskService:TasksService) { }
  ngOnInit(): void {
  }
  updateTask(){
    this.taskService.updatetask(this.formData).subscribe(err=>{alert("updated : "+err.status)});
  }
  onSubmit(){
    this.formData.append("message",this.upTask.message);
    this.formData.append("due_date",this.upTask.due_date.toString());
    this.formData.append("priority",this.upTask.priority);
    this.formData.append("assigned_to",this.upTask.assigned_to);
    
    this.isBackDrop=!this.isBackDrop;
    this.updateTask();
  }
}
