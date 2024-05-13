import {Schedule} from "./schedule";

export interface Store {
  id?: string;
  name?: string;
  description?: string;
  url?:string;
  image?: string;
  logo?:string;
  cartEnabled?: boolean;
  schedule?: Array<Schedule>
}
