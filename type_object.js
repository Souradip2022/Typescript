var userList = [];
function createUser(user) {
    userList.push(user);
    console.log(userList);
}
var myUser1 = {
    _id: '1423',
    name: 'Souradip',
    email: 'souradip@gmail.com',
    isActive: true,
    cardNumber: '4562',
    cardDate: new Date().toDateString(),
    payment: 8600
};
var myUser2 = {
    _id: '1428',
    name: 'Samyabrata',
    email: 'samyabrata@gmail.com',
    isActive: true
};
createUser(myUser1);
createUser(myUser2);
