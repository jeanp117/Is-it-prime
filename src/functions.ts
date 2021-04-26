export const playAudio = (url: string) => {
  var audioFile = new Audio(url);
  audioFile.play();
};

export const isPrime = (num: number) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

export const randomNumbersBetween = (a: number, b: number) =>
  Math.floor(Math.random() * b) + a;

export const primesBetween = (a: number, b: number) => {
  var sieve = [],
    i,
    j,
    primes = [];
  for (i = a || 2; i <= b; ++i) {
    if (!sieve[i]) {
      primes.push(i);
      for (j = i << 1; j <= b; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
};
