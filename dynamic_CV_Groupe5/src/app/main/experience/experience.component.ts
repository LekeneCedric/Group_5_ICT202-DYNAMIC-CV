import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }
  experiences :any = JSON.parse(localStorage.getItem("experience")!);
  isAdd:boolean = false;
  annee:number = 0;
  description:String = "";
  add():void
  {
    this.isAdd = !this.isAdd
  }
  addExperience() :void{
    const lastExperiences = JSON.parse(localStorage.getItem("experience")!)
      lastExperiences.push({annee:`${this.annee}`,Description:`${this.description}`})
      localStorage.setItem("experience",JSON.stringify(lastExperiences))
      this.add()
      this.ngOnInit()
      window.location.reload()

  }
  ngOnInit(): void {
  }
  

}
