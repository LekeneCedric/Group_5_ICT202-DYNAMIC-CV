import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  @Input()
  nom :any

  ngOnInit(): void {
  }
  color1Theme1:String = "white";
  color2Theme1:String = "black";
  public theme :String = `color:${this.color2Theme1};backgroundColor:${this.color1Theme1}`;
  
}
