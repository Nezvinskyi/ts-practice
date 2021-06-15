interface Plugin {
  readonly a: string;
  b: number;
  c: boolean;
  d?: string; //not compulsory
}

const config: Plugin = {
  a: 'qwerty',
  b: 4,
  c: true,
};

config.b = 5;

interface Employees {
  [key: string]: number;
}

const employees: Employees = {
  mango: 5,
  kiwi: 10,
  // apple: [20, 40],
  john: 20,
};

const entries = Object.entries(employees);
let bestEmployee = '';
let bestEmployeeIdx = 0;

for (const [name, value] of entries) {
  if (bestEmployeeIdx <= value) {
    bestEmployee = name;
  }
}

console.log(bestEmployee);

console.log(config, employees);
export {};
