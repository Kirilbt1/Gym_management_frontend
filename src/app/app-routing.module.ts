import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ExercisesComponent} from "./components/exercises/exercises.component";
import {TrainersComponent} from "./components/trainers/trainers.component";
import {AddExerciseComponent} from "./components/add-exercise/add-exercise.component";
import {ClientProfileComponent} from "./components/client-profile/client-profile.component";
import {
  TrainingProgramProfileComponent
} from "./components/training-program-profile/training-program-profile.component";
import {AddClientComponent} from "./components/add-client/add-client.component";
import {EditClientComponent} from "./components/edit-client/edit-client.component";
import {AddTrainerComponent} from "./components/add-trainer/add-trainer.component";
import {AddTrainingDayComponent} from "./components/add-training-day/add-training-day.component";
import {AddTrainingProgramComponent} from "./components/add-training-program/add-training-program.component";
import {TrainingProgramsComponent} from "./components/training-programs/training-programs.component";

const routes: Routes = [
  {path: 'trainerDetails/:id', component: AddTrainerComponent},
  {path: 'clientDetails/:id', component: ClientProfileComponent},
  {path: 'clientEdit/:id', component: EditClientComponent},
  {path: 'trainingProgramDetails/:id', component: TrainingProgramProfileComponent},
  {path: 'trainingProgramAdd', component: AddTrainingProgramComponent},
  {path: 'trainingPrograms', component: TrainingProgramsComponent},
  {path: 'trainingDayAdd', component: AddTrainingDayComponent},
  {path: 'exerciseAdd', component: AddExerciseComponent},
  {path : 'trainerAdd' , component: AddTrainerComponent},
  {path: 'clientAdd', component: AddClientComponent},
  {path: 'exercises', component: ExercisesComponent},
  {path: 'trainers', component: TrainersComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
