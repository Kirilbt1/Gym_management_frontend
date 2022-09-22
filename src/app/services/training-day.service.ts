import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Training_day} from "../interfaces/Training_day";
import {Day} from "../interfaces/Day";

@Injectable({
  providedIn: 'root'
})
export class TrainingDayService {

  constructor(private http: HttpClient) {
  }

  url = "/api/trainingDays/"

  getTrainingDays(): Observable<Training_day[]> {
    return this.http.get<Training_day[]>(this.url)
  }

  getTrainingDay(id: number): Observable<Training_day> {
    return this.http.get<Training_day>(this.url.concat(`${id}`))
  }

  saveTrainingDay(name : string,name_day: string, exercisesIds : string): Observable<Training_day> {
    return this.http.post<Training_day>(this.url.concat('save'), {
      'name' : name,
      'name_day': name_day,
      'exercisesIds': exercisesIds
    })
  }

  deleteTrainingDay(id: number): Observable<unknown> {
    return this.http.delete(this.url.concat(`delete/${id}`))
  }
}
