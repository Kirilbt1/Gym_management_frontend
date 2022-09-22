import {Training_program} from "./Training_program";

export interface Client {
  id : number
  name : string,
  surname : string,
  address : string,
  phone_number: string,
  experience : string,
  training_program : Training_program
}
