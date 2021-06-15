const temps: readonly number[] = [1, 2, 3, 4, 4];
const lows:  ReadonlyArray<number> = [2, 3];

// temps.push(5)
// lows.push(4)
const highs: (number | string)[] = [1, 'str'];

// Tuple
const speeds: [number, number] = [1.223, 1.333];

console.log(temps, lows, highs, speeds);
export { }
