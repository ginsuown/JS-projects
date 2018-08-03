let name = "Irena";         // global
let age = 25;               // global
function greet() {
    console.log(`Hello, ${name}!`);
}
function getBirthYear() {
    j = 2;
    return new Date().getFullYear() - age;

}

greet();

console.log(getBirthYear());
console.log('j = ' + j);
