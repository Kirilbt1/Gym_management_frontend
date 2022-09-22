import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {FormControl, FormGroup} from "@angular/forms";
import {TrainerService} from "../../services/trainer.service";
import {Trainer} from "../../interfaces/Trainer";
import {Training_program} from "../../interfaces/Training_program";
import {Experience} from "../../interfaces/Experience";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  trainers!: Trainer[];
  training_programs!: Training_program[];
  experiences!: Experience[];

  constructor(private clientService: ClientService, private trainerService: TrainerService,private router:Router,
              private location  : Location) {
  }

  clientForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    address: new FormControl(''),
    phone_number: new FormControl(''),
    experience: new FormControl(''),
    trainerId: new FormControl(''),
    trainingProgramId: new FormControl('')
  })

  ngOnInit(): void {
    this.trainerService.getTrainers().subscribe(data => {
      this.trainers = data
    })
    this.experiences = [{name: "BEGINNER"} as Experience, {name: "INTERMEDIATE"} as Experience, {name: "ADVANCED"} as Experience]
  }

  onChangeTrainer(): void {
    let id = Number(this.clientForm.controls.trainerId.value)
    if (id == 0 || id == undefined) {
      this.training_programs = new Array<Training_program>()
    }
    this.training_programs = this.trainers.filter(trainer => trainer.id == id)[0].training_programs
  }

  onSubmit(): void {
    this.clientService.saveClient(this.clientForm.controls.name.value!,this.clientForm.controls.surname.value!,
      this.clientForm.controls.address.value!,this.clientForm.controls.phone_number.value!,
      this.clientForm.controls.experience.value!,
      Number(this.clientForm.controls.trainerId.value!), Number(this.clientForm.controls.trainingProgramId.value!)).subscribe()
    this.router.navigate(['/'])
  }

  goBack() : void {
    this.location.back();
  }
}
