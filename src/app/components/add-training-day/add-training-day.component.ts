import {Component, OnInit} from '@angular/core';
import {TrainingDayService} from "../../services/training-day.service";
import {Router} from "@angular/router";
import {ExerciseService} from "../../services/exercise.service";
import {Exercise} from "../../interfaces/Exercise";
import {FormControl, FormGroup} from "@angular/forms";
import {Day} from "../../interfaces/Day";
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-training-day',
  templateUrl: './add-training-day.component.html',
  styleUrls: ['./add-training-day.component.css']
})
export class AddTrainingDayComponent implements OnInit {

  days!: Day[];
  exercises!: Exercise[]
  trainingDayForm = new FormGroup({
    name: new FormControl(''),
    name_day: new FormControl(''),
    exercises: new FormControl('')
  })

  constructor(private trainingDayService: TrainingDayService, private router: Router, private exerciseService: ExerciseService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.days = [{name: 'Sunday'} as Day, {name: 'Monday'} as Day, {name: 'Tuesday'} as Day, {name: 'Wednesday'} as Day,
      {name: 'Thursday'} as Day, {name: 'Friday'} as Day, {name: 'Saturday'} as Day]
    this.exerciseService.getExercises().subscribe(data => {
      this.exercises = data;
    })
  }

  onSubmit(): void {
    this.trainingDayService.saveTrainingDay(this.trainingDayForm.controls.name.value!
      , this.trainingDayForm.controls.name_day.value!, this.trainingDayForm.controls.exercises.value!).subscribe(
      data => {
        console.log(data)
      }
    )
    this.router.navigate(['/exercises'])
  }

  goBack(): void {
    this.location.back();
  }
}
