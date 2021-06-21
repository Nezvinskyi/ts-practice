
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


const makeArray = <T, Y>(a: T, b: Y, c: T) => [a, b];


// function add<T,Y>(a: T,b: Y){}
// 

console.log(makeArray(1,3, 5));
console.log(makeArray('1',5, '3'));
console.log(makeArray(true,'3', true));

const foo = <N, T>(mult: N, ...rest: T[]) => { }

console.log(foo(5, [1,2,3]));

export {};