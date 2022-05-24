import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  nom:any
  defaultStyle:String=" color:white";
  defaultBackgroundColor:String = "backgroundColor:#4a63e7"
}
