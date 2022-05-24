import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-project',
  templateUrl: './personal-project.component.html',
  styleUrls: ['./personal-project.component.scss']
})
export class PersonalProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input()
personalProject :any ;
}
