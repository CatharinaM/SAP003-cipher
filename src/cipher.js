window.cipher = {
  encode: encode,
  decode: decode
};

function encode(Mensagem1, Chave) {
  let printar="";
  for (let i=0; i < Mensagem1.length; i++) {
    let alterar = Mensagem1[i].charCodeAt();
    let cifrar = ((alterar - 65 + Chave)%26) + 65;
    printar = printar + String.fromCharCode(cifrar);
  } 
  return printar;
}

// if(cifrar = ((alterar - 97 + Chave)%26) + 97){
//   document.getElementById ("resultEnviar1").textContent = printar;
//    }
function decode(Mensagem2, Chave) {
  let printar2="";
  for (let i=0; i < Mensagem2.length; i++) {
    let alterar2 = Mensagem2[i].charCodeAt();
    let cifrar2 = ((alterar2 - 90 - Chave)%26) + 90;
    printar2 += String.fromCharCode(cifrar2);
  } 
  return printar2;
}

// if(cifrar = ((alterar - 122 - Chave)%26) + 122){
//   document.getElementById ("resultEnviar2").textContent = "";
//    }