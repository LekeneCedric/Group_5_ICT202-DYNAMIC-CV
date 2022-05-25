import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-project',
  templateUrl: './personal-project.component.html',
  styleUrls: ['./personal-project.component.scss']
})
export class PersonalProjectComponent implements OnInit {

  constructor() { }

  isAdd:boolean = false;
  img:String =""
  nom:String ="";
  description:String="";
  add():void
  {
    this.isAdd = !this.isAdd
  }
  addProject() :void{
    const lastProject = JSON.parse(localStorage.getItem("personalProject")!)
      lastProject.push({img:`${this.img}`,nom:`${this.nom}`,Description:`${this.description}`})
      localStorage.setItem("personalProject",JSON.stringify(lastProject))
      this.add()
      this.ngOnInit()
      window.location.reload()

  }
  removeProject():any{
    const lastProject = JSON.parse(localStorage.getItem("personalProject")!)
      lastProject.push({img:`${this.img}`,nom:`${this.nom}`,Description:`${this.description}`})
      localStorage.setItem("personalProject",JSON.stringify(lastProject));
      var projets = JSON.parse(localStorage.getItem("personalProject")!);
       
    for (let [i, user] of projets.entries()) {
      if (user.nom == `${this.nom}`) {
        projets.splice(i, 1); // Tim is now removed from "users"
      }
    }
    localStorage.setItem("personalProject",JSON.stringify(projets));
      this.add()
      this.ngOnInit()
      window.location.reload()
  }
  ngOnInit(): void {
  }
  personalProject : any = JSON.parse(localStorage.getItem("personalProject")!);

}
