import {Component, OnInit} from '@angular/core';
import {TrainerService} from "../../services/trainer.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Training_program} from "../../interfaces/Training_program";
import {Client} from "../../interfaces/Client";
import {TrainingProgramService} from "../../services/training-program.service";
import {ClientService} from "../../services/client.service";
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.css']
})
export class AddTrainerComponent implements OnInit {

  trainingPrograms!: Training_program[];
  clients!: Client[];

  constructor(private trainerService: TrainerService, private trainingProgramService: TrainingProgramService,
              private clientService: ClientService,private location : Location,
              private router : Router) {
  }

  ngOnInit(): void {
    this.trainingProgramService.getTrainingPrograms().subscribe(data => {
      this.trainingPrograms = data;
    })
    this.clientService.getClients().subscribe(data => {
        this.clients = data;
      }
    )
  }

  trainerForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    address: new FormControl(''),
    phone_number: new FormControl(''),
    training_programIds: new FormControl(''),
    clientIds: new FormControl('')
  })

  onSubmit(): void {
    this.trainerService.saveTrainer(this.trainerForm.controls.name.value!,this.trainerForm.controls.surname.value!,
      this.trainerForm.controls.address.value!,this.trainerForm.controls.phone_number.value!,this.trainerForm.controls.training_programIds.value!,
      this.trainerForm.controls.clientIds.value!).subscribe()
    this.router.navigate(['/trainers'])


  }
  goBack() : void{
    this.location.back();
  }
}
