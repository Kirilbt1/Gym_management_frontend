import { Component, OnInit } from '@angular/core';
import {TrainingProgramService} from "../../services/training-program.service";
import {TrainingDayService} from "../../services/training-day.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {Training_day} from "../../interfaces/Training_day";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-training-program',
  templateUrl: './add-training-program.component.html',
  styleUrls: ['./add-training-program.component.css']
})
export class AddTrainingProgramComponent implements OnInit {

  trainingDays! : Training_day[];

  trainingProgramForm = new FormGroup({
    name : new FormControl(''),
    description : new FormControl(''),
    training_daysIds : new FormControl('')
  })

  constructor(private trainingProgramService : TrainingProgramService,private trainingDayService : TrainingDayService,
              private router:Router,private location:Location) { }

  ngOnInit(): void {
    this.trainingDayService.getTrainingDays().subscribe(data => {
      this.trainingDays = data;
    })
  }

  onSubmit() : void {
    this.trainingProgramService.saveTrainingProgram(this.trainingProgramForm.controls.name.value!,
      this.trainingProgramForm.controls.description.value!,this.trainingProgramForm.controls.training_daysIds.value!);
  }

  goBack() : void {
    this.location.back();
  }
}
