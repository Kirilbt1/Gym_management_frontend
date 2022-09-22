import {Training_day} from "./Training_day";

export interface Training_program {
  id : number,
  name : string,
  description : string,
  training_days : Training_day[]
}
