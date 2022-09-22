import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ExerciseService} from "../../services/exercise.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  constructor(private exerciseService : ExerciseService,private router:Router,private location:Location) { }

  ngOnInit(): void {
  }

  exerciseForm = new FormGroup({
    name : new FormControl(''),
    url_picture : new FormControl(''),
    url_video : new FormControl(''),
    description : new FormControl('')
  })

  onSubmit() : void {
    console.log(this.exerciseForm)
    this.exerciseService.saveExercise(this.exerciseForm.controls.name.value!,this.exerciseForm.controls.url_picture.value!,
      this.exerciseForm.controls.url_video.value!,this.exerciseForm.controls.description.value!).subscribe()
    this.router.navigate(['/exercises'])
  }

  goBack() : void {
    this.location.back();
  }

}
