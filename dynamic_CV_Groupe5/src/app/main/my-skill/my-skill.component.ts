import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skill',
  templateUrl: './my-skill.component.html',
  styleUrls: ['./my-skill.component.scss']
})
export class MySkillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input()
competences:any
}
