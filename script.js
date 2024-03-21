const encryptButton = document.querySelector(".encrypt");
const decryptptButton = document.querySelector(".decrypt");
const textBox = document.querySelector(".text-box");
const decodedBox = document.querySelector(".decoded-box");
const decodedContainer = document.querySelector(".decoded-container");

let isEncrypted;

const encrypt = () => {
  if (isEncrypted) return;
  isEncrypted = true;

  const initialText = textBox.value;
  const decodedText = initialText
    .toLowerCase()
    .normalize("NFD")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/u/g, "ufat")
    .replace(/o/g, "ober")
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
  }
};

const decrypt = () => {
  if (isEncrypted === false) return;
  isEncrypted = false;

  const initialText = textBox.value;

  if (initialText !== "") {
    const decodedText = initialText
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ufat/g, "u")
      .replace(/ober/g, "o");

    decodedBox.classList.add("disabled");
    decodedContainer.classList.remove("disabled");

    decodedContainer.value = decodedText;
  } else {
    decodedBox.classList.remove("disabled");
    decodedContainer.classList.add("disabled");
  }
};

const verifyTextArea = () => {
  const initialText = textBox.value;

  if (initialText === "") {
    decodedBox.classList.remove("disabled");
    decodedContainer.classList.add("disabled");
  } else {
    decodedBox.classList.add("disabled");
    decodedContainer.classList.remove("disabled");

    // decodedContainer.value = initialText;
  }
};

const isTextBoxFocused = () => {
  const focusedElement = document.activeElement;
  return focusedElement !== textBox && textBox.value === "";
};

const handleTextBox = () => {
  if (isTextBoxFocused()) {
    textBox.value = "Digite seu texto";
    decodedBox.classList.remove("disabled");
    decodedContainer.classList.add("disabled");
  }
};

handleTextBox();

encryptButton.addEventListener("click", encrypt);
decryptptButton.addEventListener("click", decrypt);

textBox.addEventListener("focus", handleTextBox);
textBox.addEventListener("blur", handleTextBox);
