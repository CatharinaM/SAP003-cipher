window.cipher = {
  encode: encode,
  decode: decode
};

function encode(Mensagem1, Chave) {
  let printar="";
  for (let i=0; i < Mensagem1.length; i++) {
    let alterar = Mensagem1[i].charCodeAt();
    if (alterar >= 65 && alterar <= 90) {
      let cifrar = ((alterar - 65 + Chave)%26) + 65;
      printar += String.fromCharCode(cifrar); 
    } else if (alterar >= 97 && alterar <= 122) {
      let cifrarmin = ((alterar - 97 + Chave)%26) + 97;
      printar += String.fromCharCode(cifrarmin);
    } else {
      let cifraresp = ((alterar - 32 + Chave)%33) + 32;
      printar += String.fromCharCode(cifraresp);
    }
  }
  return printar;
}

function decode(Mensagem2, Chave) {
  let printar2="";
  for (let i=0; i < Mensagem2.length; i++) {
    let alterar2 = Mensagem2[i].charCodeAt();
    if (alterar2 >= 65 && alterar2 <= 90) {
      let cifrar2 = ((alterar2 - 90 - Chave)%26) + 90;
      printar2 += String.fromCharCode(cifrar2); 
    } else if (alterar2 >= 97 && alterar2 <= 122) {
      let cifrarmin2 = ((alterar2 - 122 - Chave)%26) + 122;
      printar2 += String.fromCharCode(cifrarmin2);
    } else {
      let cifraresp2 = ((alterar2 - 64 - Chave)%33) + 64;
      printar2 += String.fromCharCode(cifraresp2);
    }
  } 
  return printar2;
}
