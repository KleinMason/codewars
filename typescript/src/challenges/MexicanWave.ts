// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

export function wave(word: string): Array<string> {
  let wave: string[] = []; 
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === ' ') continue;
    wave.push(word.slice(0, i) + word.charAt(i).toUpperCase() + word.slice(i + 1));
  }
  return wave;
}
