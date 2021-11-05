const sendButton = document.querySelector(".sendButton");
const nameInput = document.querySelector(".nameInput");
const emailInput = document.querySelector(".emailInput");
const messageInput = document.querySelector(".messageInput");

console.log(nameInput);

let nameValue;
let emailValue;
let messageValue;

nameInput.addEventListener("change", (e) => {
  nameValue = e.target.value;
});
emailInput.addEventListener("change", (e) => {
  emailValue = e.target.value;
});
messageInput.addEventListener("change", (e) => {
  messageValue = e.target.value;
});
