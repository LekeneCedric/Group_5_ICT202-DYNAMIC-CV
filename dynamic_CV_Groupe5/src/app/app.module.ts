import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { HomeComponent } from './main/home/home.component';
import { MySkillComponent } from './main/my-skill/my-skill.component';
import { ServiceComponent } from './main/service/service.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { EducationComponent } from './main/education/education.component';
import { PersonalProjectComponent } from './main/personal-project/personal-project.component';
import { ContactComponent } from './main/contact/contact.component';
import { HttpClientJsonpModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainComponent,
    AboutMeComponent,
    HomeComponent,
    MySkillComponent,
    ServiceComponent,
    ExperienceComponent,
    EducationComponent,
    PersonalProjectComponent,
    ContactComponent
  ],
  imports: [
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'',component:AboutMeComponent },
      {path:'home',component:HomeComponent},
      {path:'main',component:MainComponent},
      {path:'about',component:AboutMeComponent},
      {path:'skill',component:MySkillComponent},
      {path:'service',component:ServiceComponent},
      {path:'experience',component:ExperienceComponent},
      {path:'personalProject',component:PersonalProjectComponent},
      {path:'contact',component:ContactComponent },
      {path:'education',component:EducationComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
