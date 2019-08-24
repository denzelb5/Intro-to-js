
const bouncer = (age) => {
    if (age > 21) {
        console.log('DRINK (at the bar)');
    } else {
        console.log('SHAME');
    }
}

bouncer(12)
bouncer(93)

const me = 'martin';
console.log(me.length);

const myObject = {
    name: 'john',
    age: '41',
}

console.log(myObject.name);
console.log(myObject['name']);


// Challenge

const findAndLogEmployeeStatus = (employee) => {
    if (employee.name.charAt(0).toLowerCase() === 'm') {
        employee.status ='vip'
    } else {
        employee.status = 'peasant'
    }
    console.log(`${employee.name} is a total ${employee.status}`)
    return employee;
}

const person = {
    name: 'Michael',
    status: ''
}
findAndLogEmployeeStatus(person)
findAndLogEmployeeStatus({
    name: 'lester',
    status: ''
})
findAndLogEmployeeStatus({
    name: 'carl clark',
    status: ''
})
findAndLogEmployeeStatus({
    name: prompt('Enter employee name:'),
    status: ''
})