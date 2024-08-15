"use strict";
const employee = ({ name, role, age }) => {
    let salary;
    if (role === 'developer')
        salary = 90000;
    else
        salary = null;
    return { name, salary };
};
const empDetail = employee({ name: 'Souradip', role: 'developer', age: 20 });
console.log(empDetail);
