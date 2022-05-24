import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // http?:HttpClient;
  // JsonUrl = "/assets/data.json";
  // constructor(http:HttpClient){
  //   var test = http.get(this.JsonUrl).subscribe((data?)=>{
  //     console.log(test)
  //   })
  // }

  colorTheme:String = "white";
  colorTheme2:String = "black";
  @Input()
  public theme :String = `color:${this.colorTheme};backgroundColor:${this.colorTheme2}`;
  
  nom:String = localStorage.getItem("nom")!;
  educations : any = JSON.parse(localStorage.getItem("education")!);
  experiences : any = JSON.parse(localStorage.getItem("experience")!);
  competences : any = JSON.parse(localStorage.getItem("competence")!);
  certificats : any = JSON.parse(localStorage.getItem("certificat")!);
  languages : any = JSON.parse(localStorage.getItem("language")!);
  personalProject : any = JSON.parse(localStorage.getItem("personalProject")!);
  ngOnInit(): void {
    
    if(localStorage.getItem("nom")==null)
    {
      localStorage.setItem("nom","Cedric");
    }
    if(localStorage.getItem("competence")==null)
    {
      localStorage.setItem("competence",`[
        {
            "nom":"HTML",
            "value":100
        },
        {
            "nom":"CSS",
            "value":80
        },
        {
        "nom":"Javascript",
        "value":70
        },
        {
            "nom":"nodeJs",
            "value":50
        },
        {
            "nom":"Flutter",
            "value":80
        }
    
    ]`);
    }
    if(localStorage.getItem("experience")==null)
    {
      localStorage.setItem("experience",`[
        {
            "annee":2017,
            "Description":"I have worked as a cyber cafe as a secretary, doing typing and printing work, designing flyers, designing powerpoints, doinf excell shits, and selling out internet services."
        },
        {
            "annee":2021,
            "Description":"I have 2 years of experience in building websites with wordpress. And i work with 2 other wordpress developers together to come out with well designed and responsive websites, and we have a count of more than 20 websites developed to date"
        }
    ]`);
    }
    if(localStorage.getItem("education")==null)
    {
      localStorage.setItem("education",`[
        {
            "annee":2012,
            "Description":"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."
        },
        {
          "annee":2015,
          "Description":"ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea "
        }
    ]`);
    }
    if(localStorage.getItem("certificat")==null)
    {
      localStorage.setItem("certificat",`[
        {
            "nom":"Microsoft Office",
            "Description":"training to manipulate microsoft office tools"
        },
        {
            "nom":"Cyber Security",
            "Description":"training to manipulate cyber security tools"
        }
      ]`);
    }
    if(localStorage.getItem("personalProject")==null)
    {
      localStorage.setItem("personalProject",`[
        {   "img":"https://img.freepik.com/vecteurs-libre/maquette-application-chat-mobile-conception-ux-ui-smartphone-isole-fond-blanc-modele-conception-reseau-social_172533-325.jpg?w=1060",
            "nom":"ChatApplication",
            "Description":"Chat application for mini community where they can speak freely with each other"
        },
        {   "img":"https://www.fluttercampus.com/img/uploads/web/2021/03/be83ab3ecd0db773eb2dc1b0a17836a1.webp",
            "nom":"Youtube Clone",
            "Description":"Youtube Clone  application for mini community where they can speak freely with each other"
        },
        {
          "img":"https://www.paho.org/sites/default/files/card/2021-03/vacunacion-covid-americas-650-400.jpg",
          "nom":"Project Sanka",
          "Description":"Project with manages the process of vaccination"
        }
      ]`);
    }
    if(localStorage.getItem("language")==null)
    {
      localStorage.setItem("language",`[
        {
            "nom":"French",
            "niveau":"Fluent"
        }
      ]`);
    }
    console.log(localStorage.getItem("competence"))
  }
  


}
