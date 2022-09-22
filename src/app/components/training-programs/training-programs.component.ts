import {Component, OnInit} from '@angular/core';
import {TrainingProgramService} from "../../services/training-program.service";
import {Training_program} from "../../interfaces/Training_program";
import {Router} from "@angular/router";
import {Training_day} from "../../interfaces/Training_day";

@Component({
  selector: 'app-training-programs',
  templateUrl: './training-programs.component.html',
  styleUrls: ['./training-programs.component.css']
})
export class TrainingProgramsComponent implements OnInit {

  trainingPrograms!: Training_program[];
  displayModalDialog!: boolean;
  trainingDayShow!: Training_day;

  constructor(private trainingProgramService: TrainingProgramService, private router: Router) {
  }

  ngOnInit(): void {
    this.trainingProgramService.getTrainingPrograms().subscribe(data => {
      this.trainingPrograms = data;
      this.trainingDayShow = data[0].training_days[0];
    })
  }

  deleteTrainingProgram(id: number) {
    this.trainingProgramService.deleteTrainingProgram(id).subscribe();
  }

  showModalDialog(trainingDay: Training_day): void {
    this.trainingDayShow = trainingDay;
    this.displayModalDialog = true;
  }

}
