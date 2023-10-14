
const itemInfo = {
  valor: 11.66,
};



const input = document.getElementById('quantidade-produto-01')
const sumButton = document.getElementById('btn-adicionar-produto-01')
const subButton = document.getElementById('btn-subtrair-produto-01')
//console.log(input)
//console.log(sumButton)

const quantidadeSubtotalText = document.getElementById("quantidade-subtotal");
const valorSubtoralText = document.getElementById("valor-subtotal");


function atualizarSubtotal(){
  const quantidade = input.value
  
  quantidadeSubtotalText.innerText =input.value + "itens";
  valorSubtoralText.innerText = itemInfo.valor * quantidade

}

function adionarItem(){
  input.value = Number(input.value) + 1
  
  atualizarSubtotal()
}

function subtrairItem(){
  if(input.value >1){
  input.value = Number(input.value) - 1
  }
  
  atualizarSubtotal()
}

sumButton.addEventListener('click', adionarItem)

subButton.addEventListener('click', subtrairItem)



