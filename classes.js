class Animal {
    constructor(name, species, age) {
      this.name = name;
      this.species = species;
      this.age = age;
    }


 nameAndSpecies() {
    let ani = console.log(`${this.name} is a ${this.species} and he is ${this.age} years old`);
    return ani;
  }
}
let monkey = new Animal ("Maurice", "monkey", "3")
let dog = new Animal ("Jerry", "dog","7" )
let goldfish = new Animal ("Bert", "goldfish", "1")

monkey.nameAndSpecies();
dog.nameAndSpecies();
goldfish.nameAndSpecies();