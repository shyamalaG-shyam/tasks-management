import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './user-list/user-list.component'
import{HttpClientModule} from'@angular/common/http';
import{FormsModule} from'@angular/forms';
import {MatDividerModule} from '@angular/material/divider';






import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {TasksListComponent } from './tasks-list/tasks-list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CreateTaskComponent } from './create-task/create-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';


@NgModule({
  declarations: [
    AppComponent,
    // TasksListComponent,
    UserListComponent,
    TasksListComponent,
    ToolbarComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
    // CreateTaskComponent,
    // UpdateTaskComponent,
    // ToolBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatListModule,MatCardModule,MatDividerModule,DragDropModule,MatToolbarModule,MatIconModule,MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
