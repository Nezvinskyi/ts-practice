type ID = number | string;

const userId: ID = 5;
const postId: ID = 'qwerty';

type Coords = [number, number];
const coords: Coords = [1.354, 351.565];

type ReqStatus = 'request' | 'success' | 'error';

const requestStatus: ReqStatus = 'request';

//union
type CellSize = 2 | 4 | 6 | 8 | 12;

const cell: CellSize = 8;

console.log(userId, postId, coords, requestStatus, cell);

export {};
