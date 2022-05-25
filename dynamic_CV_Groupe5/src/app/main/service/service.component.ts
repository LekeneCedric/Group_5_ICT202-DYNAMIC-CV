import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() { }
  isAdd:boolean = false;
  add():void
    {
      this.isAdd = !this.isAdd
    }
    nom:String = "";
    description:String=""
    addService() :void{
      const lastProject = JSON.parse(localStorage.getItem("service")!)
        lastProject.push({title:`${this.nom}`,Description:`${this.description}`})
        localStorage.setItem("service",JSON.stringify(lastProject))
        this.add()
        this.ngOnInit()
        window.location.reload()
  
    }
  ngOnInit(): void {
  }

}
