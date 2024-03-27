type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
}

type  cardDate = {
  cardDate?: string;
}

type cardNumber = {
  cardNumber?: string;
}

type cardDetails = cardDate & cardNumber & {
  payment?: number;
}

const userList: Array<User> = [];
function createUser(user: User & cardDetails): void {
  userList.push(user);
  console.log(userList);
}

const myUser1: User & cardDetails = {
  _id: '1423',
  name: 'Souradip',
  email: 'souradip@gmail.com',
  isActive: true,
  cardNumber: '4562',
  cardDate: new Date().toDateString(),
  payment: 8600
}

const myUser2: User & cardDetails = {
  _id: '1428',
  name: 'Samyabrata',
  email: 'samyabrata@gmail.com',
  isActive: true
}

createUser(myUser1);
createUser(myUser2);

