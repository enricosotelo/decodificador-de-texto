const textInput = document.querySelector(".text-input textarea");
const encryptButton = document.getElementById("criptBtn");
const decryptButton = document.getElementById("decriptBtn");
const validationMessage = document.getElementById("validationMessage");

const encryptionMap = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

function validateInput(text) {
  const regex = /^[a-z\s]*$/;
  if (!regex.test(text)) {
    validationMessage.textContent =
      "Apenas letras minúsculas e palavras sem acento são permitidas.";
    return false;
  }
  validationMessage.textContent = "";
  return true;
}

function encryptText() {
  let text = textInput.value.toLowerCase();
  if (!validateInput(text)) return;
  for (const letter in encryptionMap) {
    text = text.replaceAll(letter, encryptionMap[letter]);
  }
  textInput.value = text;
}

function decryptText() {
  let text = textInput.value.toLowerCase();
  if (!validateInput(text)) return;
  for (const letter in encryptionMap) {
    text = text.replaceAll(encryptionMap[letter], letter);
  }
  textInput.value = text;
}

encryptButton.addEventListener("click", encryptText);
decryptButton.addEventListener("click", decryptText);

const copyButton = document.getElementById("copyButton");

function copyToClipboard() {
  const textToCopy = textInput.value;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Texto copiado para a área de transferência!");
    })
    .catch((err) => {
      console.error("Erro ao copiar texto: ", err);
    });
}

copyButton.addEventListener("click", copyToClipboard);
