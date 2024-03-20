const encryptButton = document.querySelector(".encrypt");
const decryptptButton = document.querySelector(".decrypt");
const textBox = document.querySelector(".text-box");
const decodedBox = document.querySelector(".decoded-box");
const decodedContainer = document.querySelector(".decoded-container");

const encrypt = () => {
  const initialText = textBox.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/[^\w\s]/g, "") // Remove caracteres especiais, exceto espaços
    .replace(/\s+/g, " "); // Remove espaços extras

  if (initialText === "") {
    decodedBox.classList.remove("disabled");
    decodedContainer.classList.add("disabled");
  } else {
    decodedBox.classList.add("disabled");
    decodedContainer.classList.remove("disabled");

    decodedContainer.innerHTML = initialText;
  }

  console.log(initialText);
};

encryptButton.addEventListener("click", encrypt);
