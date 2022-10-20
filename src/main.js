import "./css/index.css"
import IMask from "imask"
// "const" cria variável.
// "document.querySelector()" Seleciona o elemento html.
// ".cc-bg svg > g path" Seleciona o elemento via css.
// ":nth-child()" seleciona na ordem do elemento.
const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")
// "

// "setAttribute" Seta o valor do elemento. ("ELEMENTO", "VALOR").
// "function" Criando função.
function setCardType(type) {
  // "const colors" Variavel coma Array.
  const colors = {
    visa: ["blue", "green"],
    mastercard: ["orange", "blue"],
    cielo: ["slateblue", "gray"],
    default: ["black", "gray"],
  }
  ccBgColor01.setAttribute("fill", colors[type][0]) //Posição 1 do array.
  ccBgColor02.setAttribute("fill", colors[type][1]) //Posição 2 do array.
  ccLogo.setAttribute("src", `cc-${type}.svg`) //Concatenando string.
}
// "setCardType" Chamando função.
setCardType("default")
//
// 1a tentativa de pegar o valor do formulário "Número do cartão";
// Craindo função para mudar de acordo com o número.

const cardNum = document.getElementById("card-number")
const cardHolder = document.getElementById("card-holder")
const expDate = document.getElementById("expiration-date")
const cvcNum = document.getElementById("security-code")
const addButton = document.getElementById("addButton")

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault()
})

cardNum.addEventListener("input", ccCheck)
cardHolder.addEventListener("input", ccAttHolder)
expDate.addEventListener("input", ccAttExp)
cvcNum.addEventListener("input", ccAttCvc)
addButton.addEventListener("click", () => {
  console.log("Click!")
})

function ccAttHolder() {
  document.querySelector(".cc-holder > .value").innerHTML = cardHolder.value
}
function ccAttExp() {
  document.querySelector("div .cc-expiration > .value").innerHTML =
    expDate.value
}
function ccAttCvc() {
  document.querySelector("div .cc-security > .value").innerHTML = cvcNum.value
}

function ccCheck() {
  document.querySelector(".cc-number").innerHTML = cardNum.value

  if (cardNum.value.length > 0) {
    if (/^5[1-5]/.test(cardNum.value)) {
      setCardType("mastercard")
    } else if (/^4\d{0,15}/.test(cardNum.value)) {
      setCardType("visa")
    } else if (/^50/.test(cardNum.value)) {
      setCardType("cielo")
    } else {
      setCardType("default")
    }
  } else {
    setCardType("default")
  }
}

//Tratando formulário com imask "npm install imask"
const cardNumPattern = {
  mask: "0000{.}0000{.}0000{.}0000",
}
const cardNumMasked = IMask(
  document.querySelector("#card-number"),
  cardNumPattern
)

//IMASK
const secCodePattern = {
  mask: "0000", //Apenas números e no máximo 4 caracteres.
}
const secCodeMasked = IMask(cvcNum, secCodePattern) //cvc mask

//Expiration Date
const expDatePattern = {
  mask: "MM{/}YY",
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
    YY: {
      mask: IMask.MaskedRange,
      from: new Date().getFullYear(),
      to: new Date().getFullYear() + 10,
    },
  }, //Formato de data.
}
const expDateMasked = IMask(expDate, expDatePattern)
