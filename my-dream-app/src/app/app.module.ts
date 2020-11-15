import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NightModeComponent } from './night-mode/night-mode.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { InfoComponent } from './info/info.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { FooterComponent } from './footer/footer.component';
import {InfiniteTypeDeleteModule} from "ngx-sbz-type-delete";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NightModeComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    InfoComponent,
    DefaultPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteTypeDeleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
