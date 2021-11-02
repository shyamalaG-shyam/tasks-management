import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public loadComponent=false
  public openCreatComponent(){
    this.loadComponent=!this.loadComponent;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
