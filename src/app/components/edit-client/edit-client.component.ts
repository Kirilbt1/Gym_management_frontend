import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../interfaces/Client";
import {ActivatedRoute, Router} from "@angular/router";
import {Trainer} from "../../interfaces/Trainer";
import {Training_program} from "../../interfaces/Training_program";
import {Experience} from "../../interfaces/Experience";
import {TrainerService} from "../../services/trainer.service";
import {Location} from "@angular/common";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  client!: Client;
  trainers!: Trainer[];
  trainer! : Trainer;
  training_programs!: Training_program[];
  experiences!: Experience[];

  constructor(private clientService: ClientService, private trainerService: TrainerService, private router: Router,
              private location: Location, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.clientService.getClientAndTrainer(id).subscribe(data => {
      this.client = data.client;
      this.trainer = data.trainer;
      this.clientForm.patchValue({
        name: this.client.name,
        surname: this.client.surname,
        address: this.client.address,
        phone_number: this.client.phone_number,
        experience: this.client.experience,
      })
    })
    this.trainerService.getTrainers().subscribe(data => {
      this.trainers = data
    })
    this.experiences = [{name: "BEGINNER"} as Experience, {name: "INTERMEDIATE"} as Experience, {name: "ADVANCED"} as Experience]
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


  onChangeTrainer(): void {
    let id = Number(this.clientForm.controls.trainerId.value)
    if (id == 0 || id == undefined) {
      this.training_programs = new Array<Training_program>()
    }
    this.training_programs = this.trainers.filter(trainer => trainer.id == id)[0].training_programs
  }

  onSubmit(): void {
    this.clientService.editClient(this.client.id,this.clientForm.controls.name.value!,this.clientForm.controls.surname.value!,
      this.clientForm.controls.address.value!,this.clientForm.controls.phone_number.value!,
      this.clientForm.controls.experience.value!,
      Number(this.clientForm.controls.trainerId.value!), Number(this.clientForm.controls.trainingProgramId.value!))
      .subscribe(data => {
        console.log(data)
      })
    this.router.navigate(['/'])
  }

  goBack(): void {
    this.location.back();
  }
}
