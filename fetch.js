document.addEventListener("DOMContentLoaded", function () {
  const closeModalBtn = document.getElementById("ok-btn");
  const modalToggle = document.getElementById("my-modal");

  // Función para abrir el modal
  function openModal() {
    modalToggle.checked = true;
  }

  // Función para cerrar el modal
  function closeModal() {
    modalToggle.checked = false;
  }

  // Agregar eventos de clic a los botones
  closeModalBtn.addEventListener("click", closeModal);

  loadData();
});

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
            <button class="open-modal-btn btn btn-primary">ver detalles</button>
        </div>
    </div>
        </div>`;
    });
    document.getElementById("users").innerHTML = users;
    const openModalButtons = document.getElementsByClassName("open-modal-btn");

    Array.from(openModalButtons).forEach((button) => {
      button.addEventListener("click", openModal);
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const getUserByID = async (id) => {
  modal.style.display = "none";
  try {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
