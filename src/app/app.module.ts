import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from "./components/home/home.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {DataTableComponent} from "./components/data-table/data-table.component";
import {TableModule} from "primeng/table";
import {ExercisesComponent} from "./components/exercises/exercises.component";
import {TrainersComponent} from './components/trainers/trainers.component';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddExerciseComponent} from './components/add-exercise/add-exercise.component';
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ClientProfileComponent} from "./components/client-profile/client-profile.component";
import {
  TrainingProgramProfileComponent
} from './components/training-program-profile/training-program-profile.component';
import {AddClientComponent} from './components/add-client/add-client.component';
import {PasswordModule} from "primeng/password";
import {ToastModule} from "primeng/toast";
import {DialogModule} from "primeng/dialog";
import {EditClientComponent} from "./components/edit-client/edit-client.component";
import {AddTrainerComponent} from "./components/add-trainer/add-trainer.component";
import { AddTrainingDayComponent } from './components/add-training-day/add-training-day.component';
import {MultiSelectModule} from "primeng/multiselect";
import {AddTrainingProgramComponent} from "./components/add-training-program/add-training-program.component";
import { TrainingProgramsComponent } from './components/training-programs/training-programs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DataTableComponent,
    ExercisesComponent,
    TrainersComponent,
    AddExerciseComponent,
    ClientProfileComponent,
    TrainingProgramProfileComponent,
    AddClientComponent,
    EditClientComponent,
    AddTrainerComponent,
    AddTrainingDayComponent,
    AddTrainingProgramComponent,
    TrainingProgramsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ButtonModule,
        TableModule,
        DropdownModule,
        FormsModule,
        RippleModule,
        ReactiveFormsModule,
        InputTextModule,
        InputTextareaModule,
        PasswordModule,
        ToastModule,
        DialogModule,
        MultiSelectModule
    ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
