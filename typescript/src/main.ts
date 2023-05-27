import { Challenge } from "./challenges/MultiplesOf3Or5";

export class Main {
  run = () => {
    const ceiling = 10;
    const rslt = Challenge.solution(ceiling);
    console.log('rslt', rslt);
  }
}
