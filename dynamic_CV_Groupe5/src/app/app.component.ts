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
  certificats : any = JSON.parse(localStorage.getItem("certificat")!);
  languages : any = JSON.parse(localStorage.getItem("language")!);
  ngOnInit(): void {
    
    // ICI J'initialise a chaque fois qu'on reinitialise la page le local Storage
   
    //   localStorage.setItem("nom","Cedric");
   
    //   localStorage.setItem("competence",`[
    //     {
    //         "nom":"HTML",
    //         "value":100
    //     },
    //     {
    //         "nom":"CSS",
    //         "value":80
    //     },
    //     {
    //     "nom":"Javascript",
    //     "value":70
    //     },
    //     {
    //         "nom":"nodeJs",
    //         "value":50
    //     },
    //     {
    //         "nom":"Flutter",
    //         "value":80
    //     }
    
    // ]`);
    
    
    //   localStorage.setItem("experience",`[
    //     {
    //         "annee":2017,
    //         "Description":"I have worked as a cyber cafe as a secretary, doing typing and printing work, designing flyers, designing powerpoints, doinf excell shits, and selling out internet services."
    //     },
    //     {
    //         "annee":2021,
    //         "Description":"I have 2 years of experience in building websites with wordpress. And i work with 2 other wordpress developers together to come out with well designed and responsive websites, and we have a count of more than 20 websites developed to date"
    //     }
    // ]`);
    
   
    //   localStorage.setItem("education",`[
    //     {
    //         "annee":2012,
    //         "Description":"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."
    //     },
    //     {
    //       "annee":2015,
    //       "Description":"ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea "
    //     }
    // ]`);
    
    
    //   localStorage.setItem("certificat",`[
    //     {
    //         "nom":"Microsoft Office",
    //         "Description":"training to manipulate microsoft office tools"
    //     },
    //     {
    //         "nom":"Cyber Security",
    //         "Description":"training to manipulate cyber security tools"
    //     }
    //   ]`);
    
    //   localStorage.setItem("personalProject",`[
    //     {   "img":"https://img.freepik.com/vecteurs-libre/maquette-application-chat-mobile-conception-ux-ui-smartphone-isole-fond-blanc-modele-conception-reseau-social_172533-325.jpg?w=1060",
    //         "nom":"ChatApplication",
    //         "Description":"Chat application for mini community where they can speak freely with each other"
    //     },
    //     {   "img":"https://www.fluttercampus.com/img/uploads/web/2021/03/be83ab3ecd0db773eb2dc1b0a17836a1.webp",
    //         "nom":"Youtube Clone",
    //         "Description":"Youtube Clone  application for mini community where they can speak freely with each other"
    //     },
    //     {
    //       "img":"https://www.paho.org/sites/default/files/card/2021-03/vacunacion-covid-americas-650-400.jpg",
    //       "nom":"Project Sanka",
    //       "Description":"Project with manages the process of vaccination"
    //     }
    //   ]`);
   
    //   localStorage.setItem("language",`[
    //     {
    //         "nom":"French",
    //         "niveau":"Fluent"
    //     }
    //   ]`);
      // const elt = JSON.parse(localStorage.getItem("competence")!)
      // elt.push({nom:'java',value:40})
      // console.log(JSON.stringify(elt))
      // localStorage.setItem("competence",JSON.stringify(elt))
      // .push({nom:'java',value:40});
      //const object :any = JSON.parse(localStorage.getItem("competence")!);
      //const array = [];
      
      //for(var i in object) {
        //  array.push(object[i]);
      //}
      //array.push({nom:'java',value:40})
      //console.log(array)
      console.log(JSON.stringify(localStorage.getItem("personalProject")))
  }
  


}
