import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {EducationComponent} from "./education/education.component";
import {SkillsComponent} from "./skills/skills.component";
import {ProjectsComponent} from "./projects/projects.component";
import {InfoComponent} from "./info/info.component";
import {DefaultPageComponent} from "./default-page/default-page.component";
// import {NightModeComponent} from "./night-mode/night-mode.component";

const routes: Routes = [
  {path:'', component: DefaultPageComponent},
  {
    path:'education',
    component: EducationComponent
  },
  {
    path:'skills',
    component: SkillsComponent
  },
  {
    path:'projects',
    component: ProjectsComponent
  },
  {
    path:'info',
    component: InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
