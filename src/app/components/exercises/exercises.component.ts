import {Component, OnInit} from '@angular/core';
import {ExerciseService} from "../../services/exercise.service";
import {Exercise} from "../../interfaces/Exercise";

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  exercises!: Exercise[];

  constructor(private exerciseService: ExerciseService) {
  }

  ngOnInit(): void {
    this.exerciseService.getExercises().subscribe(data => {
      this.exercises = data;
      console.log(data)
    })
  }

  deleteExercise(id : number) : void {
    this.exerciseService.deleteExercise(id).subscribe()
    window.location.reload()
  }
}
