const encryptButton = document.querySelector(".encrypt");
const decryptptButton = document.querySelector(".decrypt");
const textBox = document.querySelector(".text-box");
const decodedBox = document.querySelector(".decoded-box");
const decodedContainer = document.querySelector(".decoded-container");

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

    decodedContainer.innerHTML = decodedText;
  }

  console.log(initialText);
};

encryptButton.addEventListener("click", encrypt);
