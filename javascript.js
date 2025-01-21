class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(anotherUser) {
    if (this.age < anotherUser.age) {
      return `${anotherUser.firstName} è più vecchio di ${this.firstName}.`;
    } else if (this.age > anotherUser.age) {
      return `${anotherUser.firstName} è più giovane di ${this.firstName}.`;
    } else {
      return `${anotherUser.firstName} è della stessa età di ${this.firstName}.`;
    }
  }
}

x = new User("Gino", "Paoli", 80, "Napoli");
y = new User("Freddy", "Mercury", 55, "Stati Uniti");

console.log(x.compareAge(y));




let petNameField = document.querySelector("#petName-field");
let ownerNameField = document.querySelector("#ownerName-field");
let speciesField = document.querySelector("#species-field");
let breedField = document.querySelector("#breed-field");
let petList = document.querySelector("#petList");
let addButton = document.querySelector("#add");

let pets = [];

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  checkSameOwner(anotherPet) {
    if (this.ownerName === anotherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const renderList = function () {
  petList.innerHTML = ""; // <-- svuota la lista all'inizio
  pets.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerText = "Nome: " + pet.petName + ", proprietario: " + pet.ownerName + " , specie: " + pet.species;
    petList.appendChild(newLi);
  });
};

addButton.onclick = function () {
  let newPet = new Pet(petNameField.value, ownerNameField.value, speciesField.value, breedField.value);
  pets.push(newPet);
  renderList();
  petNameField.value = ""; // <-- svuota l'input field alla fine
  ownerNameField.value = ""; // <-- svuota l'input field alla fine
  speciesField.value = ""; // <-- svuota l'input field alla fine
  breedField.value = ""; // <-- svuota l'input field alla fine
};
