import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exercise} from "../interfaces/Exercise";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http: HttpClient) {
  }

  url = "/api/exercises/"

  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.url);
  }

  saveExercise(name:string,url_picture : string, url_video : string, description : string): Observable<unknown> {
    return this.http.post(this.url.concat('save'), {
      'name' : name,
      'url_picture' : url_picture,
      'url_video' : url_video,
      "description" : description
    })
  }

  deleteExercise(id : number) : Observable<unknown> {
    return this.http.delete(this.url.concat(`/delete/${id}`))
  }
}
