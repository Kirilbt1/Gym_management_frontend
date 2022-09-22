import { Component } from '@angular/core';
import {ClientService} from "./services/client.service";
import {ExerciseService} from "./services/exercise.service";
import {TrainingDayService} from "./services/training-day.service";
import {TrainingProgramService} from "./services/training-program.service";
import {TrainerService} from "./services/trainer.service";
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gym-management-angular';

  constructor(private clientService : ClientService,private exerciseService:ExerciseService,private training_dayService: TrainingDayService,
              private training_programService : TrainingProgramService, private trainerService: TrainerService,
              private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  getClients() {
    this.clientService.getClients().subscribe(data => {
      console.log(data)
    })
  }

  getExercises() {
    this.exerciseService.getExercises().subscribe(data => {
      console.log(data)
    })
  }

  getTraining_days() {
    this.training_dayService.getTrainingDays().subscribe(data => {
      console.log(data)
    })
  }

  getTraining_programs() {
    this.training_programService.getTrainingPrograms().subscribe(data => {
      console.log(data)
    })
  }

  getTrainers() {
    this.trainerService.getTrainers().subscribe(data => {
      console.log(data)
    })
  }

}
