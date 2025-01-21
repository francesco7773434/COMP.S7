const form = document.getElementById("form");
const resetBtn = document.getElementById("form-reset");
const list = document.querySelector(".list");

const users = [];

class User {
  constructor(name) {
    this.name = name;
  }
}

form.onsubmit = function (event) {
  event.preventDefault();

  const { name } = event.target.elements;
  const utente = new User(name.value);

  users.push(utente);
  generateNewLi();

  name.value = "";

  const inputValue = name.value;

  localStorage.setItem("userName", inputValue);

  console.log("Valore salvato in localStorage:", inputValue);
};
const generateNewLi = function () {
  list.innerHTML = "";

  users.forEach((user, index) => {
    const newLi = document.createElement("li");
    newLi.classList.add("li");
    newLi.innerText = `nome: ${user.name}`;
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Elimina";
    removeBtn.classList.add("remove");
    removeBtn.addEventListener("click", () => {
      removeUser(index);
    });
    newLi.appendChild(removeBtn);
    list.appendChild(newLi);
  });
};

const removeUser = (index) => {
  users.splice(index, 1);
  generateNewLi();
};
console.log(users);
