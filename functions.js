const fancyFunction = (something) => {
    return something + 'fancy'
}

const output = fancyFunction('michael is ');

console.log(output);

const sayMyName = (first, last) => {
    return `${first} ${last}`;
}

console.log(sayMyName('Callan', 'Morrison'));

const nuggetizer = (animal) => {
    return `nugget ${animal}`;
}

const humaneNuggetizer = (animal) => {
    return animal;
}

const spamFactory = (literallyAnything) => {
    return 'spam (lunch)';
}

console.log(nuggetizer('chicken'));
console.log(nuggetizer('octopus'));
console.log(nuggetizer('john wark'));


console.log(humaneNuggetizer('chicken'));
console.log(humaneNuggetizer('octopus'));
console.log(humaneNuggetizer('john wark'));

console.log(spamFactory('chicken'));
console.log(spamFactory('octopus'));
console.log(spamFactory('john wark'));

let bandNumber = 0;





const printToDOM = (toPrint) => {
    document.getElementById('output').innerHTML += toPrint;
}

printToDOM('Callan');

const takeNumber = (bandName) => {
    bandNumber += 1;
    //return bandNumber +  '. ' + bandName;
    printToDOM(`<h3>${bandNumber}. ${bandName}</h3>`);
}

takeNumber('pondScum')
takeNumber('ac/dc')
takeNumber('ledZep')
takeNumber('theCure')