var employee = function (_a) {
    var name = _a.name, role = _a.role, age = _a.age;
    var salary;
    if (role === 'developer')
        salary = 90000;
    return { name: name, salary: salary };
};
var empDetail = employee({ name: 'Souradip', role: 'developer', age: 20 });
console.log(empDetail);
