import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {ExerciseService} from "../../services/exercise.service";
import {TrainingDayService} from "../../services/training-day.service";
import {TrainingProgramService} from "../../services/training-program.service";
import {TrainerService} from "../../services/trainer.service";
import {Client} from "../../interfaces/Client";
import {Training_program} from "../../interfaces/Training_program";
import {Router} from "@angular/router";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  clients! : Client[]

  displayModalDialog!: boolean;

  constructor(private clientService: ClientService, private exerciseService: ExerciseService, private training_dayService: TrainingDayService,
              private training_programService: TrainingProgramService, private trainerService: TrainerService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(data => {
      this.clients = data;
      console.log(this.clients)
    })
  }

  deleteClient(id : number) : void {
    this.clientService.deleteClient(id);
  }

  editClient(id : number) : void {
    this.router.navigate([`/clientEdit/${id}`]).then(r => console.log(''))
  }

  showModalDialog() : void {
    this.displayModalDialog = true;
  }

}
