import { Challenge } from "./challenges/MultiplesOf3Or5";
import { comp } from "./challenges/AreTheyTheSame";

export class Main {
  run = () => {
    let rslt = this.testing(10);
    console.log('rslt', rslt);
  }

  testing = (n: number): number => {
    return n * (n + 1) / 2;
  }
}
