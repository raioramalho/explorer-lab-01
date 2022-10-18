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
setCardType("default")

// 1a tentativa de pegar o valor do formulário "Número do cartão";

// Craindo função para mudar de acordo com o número.

document.getElementById("card-number").addEventListener("input", ccCheck)

function ccCheck() {
  const ccGetFormNum = document.querySelector("#card-number").value
  console.log({ ccGetFormNum })

  if (ccGetFormNum.length > 0 && ccGetFormNum.length < 17) {
    if (/^5[1-5]/.test(ccGetFormNum)) {
      setCardType("mastercard")
      console.log("Seu cartão é mastercard!")
    } else if (/^4/.test(ccGetFormNum)) {
      setCardType("visa")
      console.log("Seu cartão é visa!")
    } else if (/^50/.test(ccGetFormNum)) {
      setCardType("cielo")
      console.log("Seu cartão é cielo!")
    } else {
      setCardType("default")
      console.log("Bandeira não encontrada!")
    }
  } else {
    setCardType("default")
    console.log("Bandeira não encontrada!")
    console.log("ERRO!")
  }
}
