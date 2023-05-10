/* const loadData = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.json();
    let users = "";
    data.data.forEach((user) => {
      users =
        users +
        `
<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">${user.first_name}</h2>
    <p>${user.email}</p>
        <div class="card-actions justify-end">
            <button onclick="getUserByID(${user.id})" class="open-modal-btn btn btn-primary">ver detalles</button>
        </div>
    </div>
        </div>`;
    });
    document.getElementById("users").innerHTML = users;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

async function getUserByID(id) {
  try {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

loadData(); */

const closeModalBtn = document.getElementById("ok-btn");
const modalToggle = document.getElementById("my-modal");
const modalContainer = document.getElementById("modal-container");

// Función para abrir el modal
async function openModal(id) {
  modalToggle.checked = true;
  await getUserByID(id);
}

// Función para cerrar el modal
function closeModal() {
  modalToggle.checked = false;
}

// Agregar evento de clic al botón de cerrar
closeModalBtn.addEventListener("click", closeModal);

const loadData = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.json();
    let users = "";
    data.data.forEach((user) => {
      users =
        users +
        `
<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">${user.first_name}</h2>
    <p>${user.email}</p>
        <div class="card-actions justify-end">
            <button class="open-modal-btn btn btn-primary" data-user-id="${user.id}" >ver detalles</button>
        </div>
    </div>
        </div>`;
    });

    document.getElementById("users").innerHTML = users;

    const openModalButtons = document.getElementsByClassName("open-modal-btn");

    Array.from(openModalButtons).forEach((button) => {
      button.addEventListener("click", () => openModal(button.dataset.userId));
    });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

async function getUserByID(id) {
  try {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await response.json();
    const user = `
        <img src="${data.data.avatar}" class="h-40">
        <h2 class="font-bold text-lg">${data.data.first_name} ${data.data.last_name}</h2>
        <p class="py-4">
        ${data.data.email}
        </p>
        `;
    modalContainer.innerHTML = user;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

loadData();
