// En ES6 podemos definir una clase con la palabra reservada class
class Person {
  constructor(name) {
    this.name = name;
  }

  speak(words) {
    return `${this.name} says ${words}`;
  }
  
}