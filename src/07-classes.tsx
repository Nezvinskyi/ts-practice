interface Params {
	size: string,
	toppings: string[]
};

interface IPizza{
	size: string,
	// toppings: string[], // just public
	addTopping(topping: string): void,
	// validateTopping(topping: string): boolean,
}
class Pizza implements IPizza {
	public size: string;
	private toppings: string[];

	constructor({ size, toppings = [] }: Params) {
		this.size = size;
		this.toppings = toppings;
	};

	private validateTopping(topping: string): boolean {
		console.log(topping);
		return true;
	};
	
	public addTopping(topping: string) {
		this.validateTopping(topping)
		this.toppings.push(topping);
	}
};


const pizza: IPizza = new Pizza({ size: 'medium', toppings: ['cheese'] });
console.log(pizza);
pizza.addTopping('test')

export { }