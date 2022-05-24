import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }
  educations : any = JSON.parse(localStorage.getItem("education")!);
  ngOnInit(): void {
  }
}
