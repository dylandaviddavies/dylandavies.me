import type { Action } from "./Action";

export interface Experience {
  company: string;
  name: string;
  fromDate: string;
  toDate: string;
  image: string;
  description: string;
  actions: Action[];
}