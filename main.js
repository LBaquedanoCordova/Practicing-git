function sayHello(name) {
    return `hola ${name}`
}

const names = ['Juan', 'Maria'];

for (const name of names) {
    console.log(sayHello(name));
}

const numbers = [2, 5, 7];

class Animal {
    constructor(tipo) {
        this.tipo = tipo;
    }
}

console.log(new Animal('vertebrado'));
