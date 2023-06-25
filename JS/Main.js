function addClient() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const phoneInput = document.getElementById("phone");
  const altPhoneInput = document.getElementById("alt-phone");
  const startDate = document.getElementById("start-date");
  const endDate = document.getElementById("end-date");
  const paidAmount = document.getElementById("paid");
  const startSession = document.getElementById("starting-session");
  const takenSession = document.getElementById("taken-session");
  const comment = document.getElementById("comment");

  const client = {
    name: nameInput.value,
    age: ageInput.value,
    phone: phoneInput.value,
    altPhone: altPhoneInput.value,
    start: startDate.value,
    end: endDate.value,
    paidAmount: paidAmount.value,
    startSession: startSession.value,
    takenSession: takenSession.value,
    comment: comment.value,
  };

  clients.push(client);
  displayClients();

  nameInput.value = "";
  ageInput.value = "";
  phoneInput.value = "";
  altPhoneInput.value = "";
  startDate.value = "";
  endDate.value = "";
  paidAmount.value = "";
  startSession.value = "";
  takenSession.value = "";
  comment.value = "";

  clientHistorySessions();
  saveClients();
}

const addSessionHistoryBtn = document.getElementById("add-session-history-btn");
const sessionHistorySpan = document.getElementById("session-history-span");

addSessionHistoryBtn.addEventListener("click", function () {
  const sessionHistory = prompt("Enter session history:");
  sessionHistorySpan.appendChild(document.createTextNode(sessionHistory));
});


const clientsContainer = document.getElementById("clients-container");
const addClientBtn = document.getElementById("add-client-btn");

let clients = [];

function displayClients() {
  clientsContainer.innerHTML = "";
  clients.forEach((client, index) => {
    const clientBox = document.createElement("div");
    clientBox.classList.add("client-box");

    const nameP = document.createElement("p");
    nameP.textContent = `Name: ${client.name}`;
    clientBox.appendChild(nameP);

    const ageP = document.createElement("p");
    ageP.textContent = `Age: ${client.age}`;
    clientBox.appendChild(ageP);

    const phoneP = document.createElement("p");
    phoneP.textContent = `Phone: ${client.phone}`;
    clientBox.appendChild(phoneP);

    const startP = document.createElement("p");
    startP.textContent = `Starting-Date: ${client.start}`;
    clientBox.appendChild(startP);

    const endP = document.createElement("p");
    endP.textContent = `Ending-Date: ${client.end}`;
    clientBox.appendChild(endP);

    const amountP = document.createElement("p");
    amountP.textContent = `Amount Paid: ${client.paidAmount}`;
    clientBox.appendChild(amountP);

    const sessionP = document.createElement("p");
    sessionP.textContent = `Total Session: ${client.startSession}`;
    clientBox.appendChild(sessionP);

    const takenSessionP = document.createElement("p");
    takenSessionP.textContent = `Taken Session: ${client.takenSession}`;
    clientBox.appendChild(takenSessionP);

    const altPhoneP = document.createElement("p");
    altPhoneP.textContent = `Alternate Phone: ${client.altPhone}`;
    clientBox.appendChild(altPhoneP);

    const commentP = document.createElement("p");
    commentP.textContent = `Comment : ${client.comment}`;
    clientBox.appendChild(commentP);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      editClient(index);
    });
    clientBox.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteClient(index);
    });
    clientBox.appendChild(deleteButton);

    clientsContainer.appendChild(clientBox);
  });
}

function editClient(index) {
  const client = clients[index];
  const name = prompt("Enter client name:", client.name);
  const age = client.age;
  const phone = client.phone;
  const altPhone = client.altPhone;
  const paidAmount = client.paidAmount;
  const startSession = client.startSession;
  const start = prompt("Enter The New Date: ", client.start);
  const end = prompt("Enter The New Date: ", client.end);
  const takenSession = prompt(
    "Enter the Taken Sessions: ",
    client.takenSession
  );
  const comment = prompt("Enter The New Comment: ", client.comment);

  clients[index] = {
    name: name || client.name,
    age: age || client.age,
    phone: phone || client.phone,
    altPhone: altPhone || client.altPhone,
    paidAmount: paidAmount || client.paidAmount,
    startSession: startSession || client.startSession,
    start: start || client.start,
    end: end || client.end,
    takenSession: takenSession || client.takenSession,
    comment: comment || client.comment,
  };

  displayClients();
  saveClients();
}

function deleteClient(index) {
  clients.splice(index, 1);
  displayClients();
  saveClients();
}

function saveClients() {
  localStorage.setItem("clients", JSON.stringify(clients));
}

function loadClients() {
  const storedClients = localStorage.getItem("clients");
  if (storedClients) {
    clients = JSON.parse(storedClients);
    displayClients();
  }
}

addClientBtn.addEventListener("click", addClient);

loadClients();

// ##########################################################################
// function displaySessionHistory(client) {
//   const sessionHistoryBox = document.createElement("div");
//   sessionHistoryBox.classList.add("session-box");
//   for (const session of client.sessionHistory) {
//     const sessionDate = document.createElement("p");
//     sessionDate.textContent = session;
//     sessionHistoryBox.appendChild(sessionDate);
//   }

//   const addSessionBtn = document.createElement("button");
//   addSessionBtn.setAttribute("id", "add-session-btn");
//   addSessionBtn.textContent = "Add Session";
//   addSessionBtn.addEventListener("click", addSessionInput);
//   sessionHistoryBox.appendChild(addSessionBtn);

//   const deleteSessionBtn = document.createElement("button");
//   deleteSessionBtn.setAttribute("id", "delete-session-btn");
//   deleteSessionBtn.textContent = "Delete Session";
//   deleteSessionBtn.addEventListener("click", () => {
//     sessionHistoryBox.removeChild(sessionHistoryBox.lastChild);
//   });
//   sessionHistoryBox.appendChild(deleteSessionBtn);

//   const sessionDateInput = document.createElement("input");
//   sessionDateInput.setAttribute("id", "session-date-input");
//   sessionDateInput.setAttribute("type", "date");
//   sessionHistoryBox.appendChild(sessionDateInput);

//   history.appendChild(sessionHistoryBox);
// }

// function displayClients() {
//   clientsContainer.innerHTML = "";
//   sessionsHistory.innerHTML = "";
//   clients.forEach((client) => {
//     const clientBox = document.createElement("div");
//     clientBox.classList.add("client-box");

//     const nameP = document.createElement("p");
//     nameP.textContent = `Name: ${client.name}`;
//     clientBox.appendChild(nameP);

//     // Append other client details

//     const editButton = document.createElement("button");
//     editButton.textContent = "Edit";
//     editButton.addEventListener("click", () => {
//       editClient(index);
//     });
//     clientBox.appendChild(editButton);

//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", () => {});
//   });
// }

// // Get the date-container div
// const dateContainer = document.getElementById("sessions-history");

// // Create a function to add a new date input and button to the div
// function addDateInput() {
//   // Create a new div element
//   const newDiv = document.createElement("div");

//   // Create a new date input element
//   const newDateInput = document.createElement("input");
//   newDateInput.type = "date";

//   // Create a new button element for adding more inputs
//   const newAddButton = document.createElement("button");
//   newAddButton.textContent = "Add";
//   newAddButton.addEventListener("click", addDateInput);

//   // Create a new button element for deleting the input and button
//   const newDeleteButton = document.createElement("button");
//   newDeleteButton.textContent = "Delete";
//   newDeleteButton.addEventListener("click", function () {
//     dateContainer.removeChild(newDiv);
//   });

//   // Add the date input and buttons to the new div
//   newDiv.appendChild(newDateInput);
//   newDiv.appendChild(newAddButton);
//   newDiv.appendChild(newDeleteButton);

//   // Add the new div to the date-container div
//   dateContainer.appendChild(newDiv);
// }

// // Add an event listener to the Add button to call the addDateInput function
// const addButton = document.getElementById("history-add-btn");
// addButton.addEventListener("click", addDateInput);

// function clientHistorySessions() {
//   const clientHistory = document.getElementById("sessions-history");
//   const clientHistoryInput = document.createElement("input");
//   clientHistoryInput.type = "date";
//   clientHistory.appendChild(clientHistoryInput);
// }