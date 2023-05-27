// https://www.codewars.com/kata/514b92a657cdc65150000006/train/typescript

export class Challenge {
  static solution = (ceiling: number): number => {
    if (ceiling < 3)
      return 0;
    let sum = 0;
    for (let i = 3; i < ceiling; i++) {
      if (i % 3 === 0 || i % 5 === 0)
        sum += i;
    }
    return sum;
  }
}


// hobovsky's answer: https://www.codewars.com/users/hobovsky
/*
export class Challenge {
  static solution(number) {
      
    let sum = (max, d) => {
      let n = (max / d) | 0;
      let s = (n * (n + 1) * d / 2) | 0;
      return s;
    }
    return sum(--number, 3) + sum(number, 5) - sum(number, 3 * 5);
   
  }
}
*/