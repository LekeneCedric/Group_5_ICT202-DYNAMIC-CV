import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }
  experiences :any = JSON.parse(localStorage.getItem("experience")!)
  ngOnInit(): void {
  }
  

}
