class Animal {
    constructor(height, width) {
      this.name = name;
      this.species = species;
      this.age = age;
    }
}

function nameAndSpecies() {
    let ani = `${this.name} is a ${this.species}`;
    return ani;
  }
let monkey = new Animal ("Maurice", "monkey")

console.log (monkey.nameAndSpecies())