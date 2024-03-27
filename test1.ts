
const employee = ({name, role, age}: {name: string, role: string, age: number}): {name: string, salary: number} => {
    let salary: number;
    if(role === 'developer') salary = 90000;
    return {name, salary};
}

const empDetail: {name: string, salary: any} = employee({name: 'Souradip', role: 'developer', age: 20});
console.log(empDetail);