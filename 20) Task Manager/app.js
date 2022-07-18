//Selecting Elements

const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const conatiner = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

//Edit Option
let editElement;
let editFlag = false;
let editID = "";

//*********Event Listeners*********//

//Submit Form
form.addEventListener("submit", addItem);

//Clear Items
clearBtn.addEventListener("click", clearItems);

//Load Items
window.addEventListener("DOMContentLoaded", setUpItems);

//*********Function*********//

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    createListItem(id, value);
    //Display Alert
    displayAlert("Item added to the list", "success");
    //Show Container
    conatiner.classList.add("show-container");
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag === true) {
    editElement.innerHTML = value;
    displayAlert("value Changed", "success");
    //Edit Local Storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("Please enter Value", "danger");
  }

  //Display Alert
  function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    setTimeout(function () {
      alert.textContent = "";
      alert.classList.remove(`alert-${action}`);
    }, 1000);
  }
}

//Clear Items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  conatiner.classList.remove(".show-container");
  displayAlert("Empty List", "danger");
  setBackToDefault();

  localStorage.removeItem("list");
}

//Delete Function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    conatiner.classList.remove(".show-container");
  }
  displayAlert("Item Removed", "success");
  setBackToDefault();
  //Remove from Local Storage
  removeFromLocalStorage(id);
}

//Edit function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  //Set Edit Item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  //Set Form Value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
}

//Set Back To Default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

//********Local Storage********//
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function setUpItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    conatiner.classList.add(".show-container");
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  element.classList.add("grocery-item");
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
        <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
        </button>
        </div>`;
  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);
  //Appending Child
  list.appendChild(element);
}
