import {Training_program} from "./Training_program";
import {Client} from "./Client";

export interface Trainer {
  id : number,
  name : string,
  surname : string,
  address : string,
  phone_number : string,
  training_programs : Training_program[],
  clients : Client[]
}
