const encryptButton = document.querySelector(".encrypt");
const decryptptButton = document.querySelector(".decrypt");
const textBox = document.querySelector(".text-box");
const decodedBox = document.querySelector(".decoded-box");
const decodedContainer = document.querySelector(".decoded-container");

let isEncrypted;

const encrypt = () => {
  const initialText = textBox.value;
  const decodedText = initialText
    .toLowerCase()
    .normalize("NFD")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/u/g, "ufat")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/[^\w\s]/g, "") // Remove caracteres especiais, exceto espaços
    .replace(/\s+/g, " "); // Remove espaços extras

  if (initialText === "") {
    decodedBox.classList.remove("disabled");
    decodedContainer.classList.add("disabled");
  } else {
    decodedBox.classList.add("disabled");
    decodedContainer.classList.remove("disabled");

    decodedContainer.value = decodedText;

    isEncrypted = true;
  }
};

const decrypt = () => {
  if (!isEncrypted) return;
  isEncrypted = false;

  const decodedText = textBox.value
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ufat/g, "u");

  decodedContainer.value = decodedText;
};

const verifyTextArea = () => {
  const initialText = textBox.value;

  if (initialText === "") {
    decodedBox.classList.remove("disabled");
    decodedContainer.classList.add("disabled");
  } else {
    decodedBox.classList.add("disabled");
    decodedContainer.classList.remove("disabled");

    decodedContainer.value = initialText;
  }
};

const handleTextBox = () => {
  if (isTextBoxFocused()) {
    textBox.value = "Digite seu texto";
    decodedBox.classList.remove("disabled");
    decodedContainer.classList.add("disabled");
  }
};

const isTextBoxFocused = () => {
  const focusedElement = document.activeElement;
  return focusedElement !== textBox && textBox.value === "";
};

isTextBoxFocused();

encryptButton.addEventListener("click", encrypt);
decryptptButton.addEventListener("click", decrypt);

textBox.addEventListener("focus", handleTextBox);
textBox.addEventListener("blur", handleTextBox);
