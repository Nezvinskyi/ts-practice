interface ISubstractFn {
  (a: number, b: number): number;
}

const SubstractFn: ISubstractFn = (a, b) => a - b;

console.log(SubstractFn(5, 4));

type AddFn = (a: number, b: number) => number;

const add: AddFn = function (a, b) {
  return a + b;
};

const sum = (a: number, b: number): number => {
  return a + b;
};
const result = sum(1, 2);

type Fn = (a: number, b: number, ...restParams: number[]) => number[];
const fn: Fn = (a, b, ...restParams) => [a, b];
fn(1, 2, 3, 4);

type Log = (message: string) => void;

const log: Log = message => {
  console.log(message);
};
log('Hello');

console.log(result);
console.log(add(3, 4));

enum PizzaSize {
  Small = 's',
  Medium = 'm',
  Large = 'l',
}

interface IPizza {
  size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;
  toppings: string[];
  // logSize: ()=> void;
  logSize?(): void;
  getSize(): string;
  addTopping(topping: string): void;
}

const pizza: IPizza = {
  size: PizzaSize.Medium,
  toppings: ['souce', 'mushrooms'],
  logSize() {
    console.log(this.size);
  },
  getSize() {
    return this.size;
  },
  addTopping(topping) {
    this.toppings.push(topping);
  },
};
console.log(pizza);

export {};
