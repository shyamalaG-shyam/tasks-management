import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CreateTaskComponent } from './create-task/create-task.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // paths:Routes=[
  //   {path:"create-task",component:CreateTaskComponent}
  // ]
 }
