import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';
import { EditBtnsComponent } from './edit-btns/edit-btns.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { SkillsComponent } from './skills/skills.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { CounterComponent } from './counter/counter.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectCartComponent } from './project-cart/project-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EditComponent,
    EditBtnsComponent,
    PersonalDataComponent,
    ModalWindowComponent,
    SkillsComponent,
    AddProjectComponent,
    CounterComponent,
    ExperienceComponent,
    ProjectCartComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
