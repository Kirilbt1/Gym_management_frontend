import {Component, OnInit} from '@angular/core';
import {TrainerService} from "../../services/trainer.service";
import {Trainer} from "../../interfaces/Trainer";
import {Client} from "../../interfaces/Client";
import {ClientService} from "../../services/client.service";
import {Training_program} from "../../interfaces/Training_program";

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  trainers!: Trainer[];
  displayModalDialogClient! : boolean;
  displayModalDialogTrainingProgram! : boolean;
  clientShow! : Client;
  trainingProgramShow! : Training_program;
  displayModalDialog! : boolean;

  constructor(private trainerService: TrainerService) {
  }

  ngOnInit(): void {
    this.trainerService.getTrainers().subscribe(data => {
      this.trainers = data;
      this.clientShow = data[0].clients[0]
      this.trainingProgramShow = data[0].training_programs[0]
    })
  }

  deleteTrainer(id : number) : void {
    this.trainerService.deleteTrainer(id).subscribe()
    window.location.reload()
  }

  showModalDialogClient(client : Client) : void {
    this.clientShow = client;
    this.displayModalDialogClient = true;
  }
  showModalDialogTrainingProgram(trainingProgram : Training_program) : void {
    this.trainingProgramShow = trainingProgram;
    this.displayModalDialogTrainingProgram = true;
  }
  showModalDialog(){
    this.displayModalDialog = true;
  }
}
