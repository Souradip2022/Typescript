"use strict";
const userList = [];
function createUser(user) {
    userList.push(user);
    console.log(userList);
}
const myUser1 = {
    _id: '1423',
    name: 'Souradip',
    email: 'souradip@gmail.com',
    isActive: true,
    cardNumber: '4562',
    cardDate: new Date().toDateString(),
    payment: 8600
};
const myUser2 = {
    _id: '1428',
    name: 'Samyabrata',
    email: 'samyabrata@gmail.com',
    isActive: true
};
createUser(myUser1);
createUser(myUser2);
