// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/typescript

export function bouncingBall(h: number, bounce: number, window: number): number {
  if (h <= 0 || window >= h || bounce <= 0 || bounce >= 1) return -1;
  return 2 + bouncingBall(h * bounce, bounce, window);
}

// danio1024's answer
/*
export function bouncingBall(h: number, bounce: number, window: number): number {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  
  return 2 * Math.ceil(Math.log(window/h)/Math.log(bounce)) - 1; 
}
*/