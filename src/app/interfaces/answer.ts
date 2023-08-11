import {Option} from "./option";

export interface Answer {
  id: string;
  name: string;
  max: number;
  options: Array<Option>;
}
