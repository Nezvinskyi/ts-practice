interface User <T> {
	id: T
}

const mango: User <number> = { id: 24 }
const polly: User <string> = {id: 'jhkhkf'}
console.log(mango, polly);

interface Tab<C> {
	id: string;
	position: number;
	active: boolean;
	content: C;
}

type TStringTab = Tab<string>
type TStringArrayTab = Tab<string[]>

const tab1: TStringTab = {
	id: 'id-1',
	position: 2,
	active: false,
	content: 'Tab data'
};

const tab2: TStringArrayTab = {
	id: 'id-2',
	position: 4,
	active: true,
	content: ['content-1', 'content-2']
};


console.log(tab1, tab2);
export { }