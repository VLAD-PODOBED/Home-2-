export const solve = (xs: number[]): number => {
    let odd = 0;
    for (let a of xs) {
      odd ^= a;
    }
    return odd;
  };