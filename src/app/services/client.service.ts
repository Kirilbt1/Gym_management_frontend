import {Injectable} from '@angular/core';
import {Client} from "../interfaces/Client";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Trainer} from "../interfaces/Trainer";
import {Training_program} from "../interfaces/Training_program";
import {ClientAndTrainer} from "../interfaces/ClientAndTrainer";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  url = "/api/clients/"

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url)
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(this.url.concat(`${id}`))
  }

  getTrainerByClient(id: number): Observable<Trainer> {
    return this.http.get<Trainer>(this.url.concat(`trainer/${id}`))
  }

  getClientAndTrainer(id: number): Observable<ClientAndTrainer> {
    return this.http.get<ClientAndTrainer>(this.url.concat(`clientAndTrainer/${id}`))
  }

  saveClient(name: string, surname: string, address: string, phone_number: string, experience: string,
             trainerId: number,
             training_programId: number): Observable<unknown> {
    return this.http.post(this.url.concat('save'), {
      'name': name,
      'surname': surname,
      'address': address,
      'phone_number': phone_number,
      'experience': experience,
      'trainerId': trainerId,
      'training_programId': training_programId
    })
  }

  editClient(id: number, name: string, surname: string, address: string, phone_number: string, experience: string,
             trainerId: number,
             training_programId: number): Observable<Client> {
    return this.http.put<Client>(this.url.concat(`edit/${id}`), {
      'name': name,
      'surname': surname,
      'address': address,
      'phone_number': phone_number,
      'experience': experience,
      'trainerId': trainerId,
      'training_programId': training_programId
    })
  }

  deleteClient(id: number): void {
    this.http.delete(this.url.concat(`delete/${id}`)).subscribe()
    window.location.reload()
  }

}
