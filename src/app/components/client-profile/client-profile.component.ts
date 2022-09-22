import { Component, OnInit } from '@angular/core';
import {Client} from "../../interfaces/Client";
import {ClientService} from "../../services/client.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  client! : Client;

  constructor(private clientService : ClientService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'))
    this.clientService.getClient(id).subscribe(data => {
      this.client = data;
      console.log(data)
    })
  }
}
