import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Training_program} from "../interfaces/Training_program";
import {Trainer} from "../interfaces/Trainer";
import {Training_day} from "../interfaces/Training_day";

@Injectable({
  providedIn: 'root'
})
export class TrainingProgramService {

  constructor(private http: HttpClient) {
  }

  url = "/api/trainingPrograms/"

  getTrainingPrograms(): Observable<Training_program[]> {
    return this.http.get<Training_program[]>(this.url)
  }

  getTrainingProgram(id: number): Observable<Training_program> {
    return this.http.get<Training_program>(this.url.concat(`${id}`))
  }

  saveTrainingProgram(name: string, description: string, training_daysIds: string) : Observable<Training_program>{
    return this.http.post<Training_program>(this.url.concat('save'), {
      'name' : name,
      'description' : description,
      'training_daysIds' : training_daysIds
    })
  }

  deleteTrainingProgram(id: number): Observable<unknown> {
    return this.http.delete(this.url.concat(`delete/${id}`))
  }

}
