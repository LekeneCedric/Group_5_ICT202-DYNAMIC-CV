import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }
  isAdd:boolean = false;
  annee:number = 0;
  description:String = "";
  add():void
  {
    this.isAdd = !this.isAdd
  }
  educations : any = JSON.parse(localStorage.getItem("education")!);
  addEducation() :void{
    const lastEducation = JSON.parse(localStorage.getItem("education")!)
      lastEducation.push({annee:`${this.annee}`,Description:`${this.description}`})
      localStorage.setItem("education",JSON.stringify(lastEducation))
      this.add()
      this.ngOnInit()
      window.location.reload()

  }
  removeEducation():void{
    const lastEducation = JSON.parse(localStorage.getItem("education")!)
    lastEducation.push({annee:`${this.annee}`,Description:`${this.description}`})
  }
  ngOnInit(): void {
  }
}
