let entradaTexto = document.getElementById('caixaEntrada')
let saidaTexto = document.getElementById('caixaSaida')

function enviarCrypt(){
    const textoCrypt = criptografarTexto(entradaTexto.value);
    if (entradaTexto.value == ''){
        saidaTexto.value = 'Erro! Nenhuma mensagem encontrada para ser criptografada.'
    }
    else{
        saidaTexto.value = textoCrypt
        entradaTexto.value = ''
    }
}

function criptografarTexto(entrada) {
    const matrizSubstituicao = [    ['e', 'enter'],
      ['i', 'imes'],
      ['a', 'ai'],
      ['o', 'ober'],
      ['u', 'ufat']
    ];
  
    let resultado = entrada;
    for (let i = 0; i < matrizSubstituicao.length; i++) {
      resultado = resultado.replace(new RegExp(matrizSubstituicao[i][0], "gi"), matrizSubstituicao[i][1]);
    }
    return resultado;
  }

  
function enviarDecrypt(){
    const txtDecrypt = descriptografarTexto(entradaTexto.value);
    if (entradaTexto.value == ''){
        saidaTexto.value = 'Erro! Nenhuma mensagem encontrada para ser descriptografada.'
    }else{
        saidaTexto.value = txtDecrypt
        entradaTexto.value = ''
    }
} 

function descriptografarTexto(entrada) {
    const matrizSubstituicao = [    ['e', 'enter'],
      ['i', 'imes'],
      ['a', 'ai'],
      ['o', 'ober'],
      ['u', 'ufat']
    ];
  
    let resultado = entrada;
    for (let i = 0; i < matrizSubstituicao.length; i++) {
      resultado = resultado.replace(new RegExp(matrizSubstituicao[i][1], "gi"), matrizSubstituicao[i][0]);
    }
    return resultado;
  }

function copiarTexto() {
  const cpytext = document.getElementById("caixaSaida").value;

  if (cpytext !== "") {
    navigator.clipboard.writeText(cpytext);
  }
}