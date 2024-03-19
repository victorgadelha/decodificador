const encryptButton = document.querySelector(".encrypt");
const decryptptButton = document.querySelector(".decrypt");
const textBox = document.querySelector(".text-box");
const decodedBox = document.querySelector(".decoded-box");
const decodedContainer = document.querySelector(".decoded-container");

const encrypt = () => {
  const initialText = textBox.value;

  if (!initialText) return;
  decodedBox.classList.toggle("disabled");
  decodedContainer.innerText = initialText;
};

encryptButton.addEventListener("click", encrypt);
