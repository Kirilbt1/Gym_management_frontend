import {Exercise} from "./Exercise";

export interface Training_day {
  id : number,
  name : string,
  exercises: Exercise[],
  name_day: string
}
