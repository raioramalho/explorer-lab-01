import "./css/index.css"
// "const" cria variável.
// "document.querySelector()" Seleciona o elemento html.
// ".cc-bg svg > g path" Seleciona o elemento via css.
// ":nth-child()" seleciona na ordem do elemento.
const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")
// "console.log()" printa uma mensagem no log do console.
console.log({ ccBgColor01 })
console.log({ ccBgColor02 })
console.log({ ccLogo })
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
//
setCardType("cielo")

// 1a tentativa de pegar o valor do formulário "Número do cartão";
const ccGetFormNum = document.querySelector("#card-number")
const ccFormNum = ccGetFormNum.value
console.log({ ccFormNum })
