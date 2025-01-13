function sayHello(name) {
    return `hola ${name}`
}

const names = ['Juan', 'Maria'];

for (const name of names) {
    console.log(sayHello(name));
}
