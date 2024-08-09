export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandom<T>(source: readonly T[]): T {
  return source[getRandomInt(0, source.length - 1)];
}
