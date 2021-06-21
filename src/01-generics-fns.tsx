
const reverse = <T, >(array: T[]) => {
  return [...array].reverse();
};

console.log(reverse<number>([1, 2, 3, 4, 5]));
console.log(reverse(["Mango", "Poly", "Ajax", "Kiwi"]));
console.log(reverse([{ a: 1 }, { b: 2 }, { c: 3 }]));

const isEqual = <T, Y>(a: T, b: Y) => {
  return Object.is(a, b);
};

console.log(isEqual(3, 3));
console.log(isEqual(3, "3"));

export {};