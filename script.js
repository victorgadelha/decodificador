const encryptButton = document.querySelector(".encrypt");
const decryptptButton = document.querySelector(".decrypt");
const inputText = document.querySelector(".text-box");
const noMessageBox = document.querySelector(".no-message-container");
const outputContainer = document.querySelector(".output-container");
const outputText = document.querySelector(".output-text");

let isEncrypted;

const encrypt = () => {
  if (isEncrypted) return;
  isEncrypted = true;

  const initialText = inputText.value;
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
    noMessageBox.classList.remove("disabled");
    outputContainer.classList.add("disabled");
  } else {
    noMessageBox.classList.add("disabled");
    outputContainer.classList.remove("disabled");

    outputText.value = decodedText;
  }
};

const decrypt = () => {
  if (isEncrypted === false) return;
  isEncrypted = false;

  const initialText = inputText.value;

  if (initialText !== "") {
    const decodedText = initialText
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ufat/g, "u")
      .replace(/ober/g, "o");

    noMessageBox.classList.add("disabled");
    outputText.classList.remove("disabled");

    outputText.value = decodedText;
  } else {
    noMessageBox.classList.remove("disabled");
    outputText.classList.add("disabled");
  }
};

const verifyTextArea = () => {
  const initialText = inputText.value;

  if (initialText === "") {
    noMessageBox.classList.remove("disabled");
    outputText.classList.add("disabled");
  } else {
    noMessageBox.classList.add("disabled");
    outputText.classList.remove("disabled");

    // outputText.value = initialText;
  }
};

const isinputTextFocused = () => {
  const focusedElement = document.activeElement;
  return focusedElement !== inputText && inputText.value === "";
};

encryptButton.addEventListener("click", encrypt);
decryptptButton.addEventListener("click", decrypt);

inputText.addEventListener("focus", handleinputText);
inputText.addEventListener("blur", handleinputText);
