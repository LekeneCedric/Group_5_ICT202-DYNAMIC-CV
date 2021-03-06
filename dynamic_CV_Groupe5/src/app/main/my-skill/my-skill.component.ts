import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skill',
  templateUrl: './my-skill.component.html',
  styleUrls: ['./my-skill.component.scss']
})
export class MySkillComponent implements OnInit {

  constructor() { }

  isAdd:boolean = false;
  nom:String ="";
  value:number = 0;
  add():void
  {
    this.isAdd = !this.isAdd
  }
  addSkill() :void{
    const lastExperiences = JSON.parse(localStorage.getItem("competence")!)
      lastExperiences.push({nom:`${this.nom}`,value:`${this.value}`})
      localStorage.setItem("competence",JSON.stringify(lastExperiences))
      this.add()
      this.ngOnInit()
      window.location.reload()

  }
  removeSkill():void{
    const lastExperiences = JSON.parse(localStorage.getItem("competence")!)
    
    var skill = JSON.parse(localStorage.getItem("competence")!);
       
    for (let [i, user] of skill.entries()) {
      if (user.nom == `${this.nom}`) {
        skill.splice(i, 1); // Tim is now removed from "users"
      }
    }
    localStorage.setItem("competence",JSON.stringify(skill))
    this.add()
    this.ngOnInit()
    window.location.reload()
  }
  ngOnInit(): void {
  }  
  competences:any = JSON.parse(localStorage.getItem("competence")!);

}
