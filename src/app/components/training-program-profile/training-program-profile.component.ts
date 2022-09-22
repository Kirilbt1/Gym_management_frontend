import { Component, OnInit } from '@angular/core';
import {TrainingProgramService} from "../../services/training-program.service";
import {ActivatedRoute} from "@angular/router";
import {Training_program} from "../../interfaces/Training_program";

@Component({
  selector: 'app-training-program-profile',
  templateUrl: './training-program-profile.component.html',
  styleUrls: ['./training-program-profile.component.css']
})
export class TrainingProgramProfileComponent implements OnInit {

  training_Program! : Training_program;

  constructor(private trainingProgramService : TrainingProgramService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.trainingProgramService.getTrainingProgram(id).subscribe(data => {
      this.training_Program = data;
      console.log(data)
    })
  }

}
