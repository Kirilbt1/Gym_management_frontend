import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Trainer} from "../interfaces/Trainer";
import {Training_program} from "../interfaces/Training_program";

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http: HttpClient) {
  }

  url = "/api/trainers/"

  getTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.url)
  }

  getTrainer(id: number): Observable<Trainer> {
    return this.http.get<Trainer>(this.url.concat(`${id}`))
  }

  saveTrainer(name: string, surname: string, address: string, phone_number: string,
              training_programIds: string, clientIds: string): Observable<Trainer> {
    return this.http.post<Trainer>(this.url.concat('save'), {
      'name': name,
      'surname': surname,
      'address': address,
      'phone_number': phone_number,
      'training_programIds': training_programIds,
      'clientIds': clientIds
    })
  }

  deleteTrainer(id: number): Observable<unknown> {
    return this.http.delete(this.url.concat(`delete/${id}`))
  }
}
