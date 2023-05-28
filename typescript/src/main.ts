import { Challenge } from "./challenges/MultiplesOf3Or5";
import { comp } from "./challenges/AreTheyTheSame";

export class Main {
  run = () => {
    let a = [121, 144, 19, 161, 19, 144, 19, 11];
    let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
    let rslt = comp(a, b);
    console.log('rslt', rslt);
  }
}
