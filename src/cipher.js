window.cipher = {
  encode: encode,
  decode: decode
};

function encode(Mensagem1, Chave) {
  let printar="";
  let alterar="";
  let cifrar="";
  let cifrarmin="";
  let cifraresp="";
  for (let i=0; i < Mensagem1.length; i++) {
    alterar = Mensagem1[i].charCodeAt();
  
  if (alterar >= 65 && alterar <= 90) {
     cifrar = ((alterar - 65 + Chave)%26) + 65;
     printar +=  String.fromCharCode(cifrar); 
  } 

  if (alterar >= 97 && alterar <= 122) {
     cifrarmin = ((alterar - 97 + Chave)%26) + 97;
     printar +=  String.fromCharCode(cifrarmin);
}
  if (alterar >= 32 && alterar <= 64) {
     cifraresp = ((alterar - 32 + Chave)%26) + 32;
     printar +=  String.fromCharCode(cifraresp);
}
  }
  return printar;
}


function decode(Mensagem2, Chave) {
  let printar2="";
  let alterar2="";
  let cifrar2="";
  let cifrarmin2="";
  let cifraresp2="";
  for (let i=0; i < Mensagem2.length; i++) {
    alterar2 = Mensagem2[i].charCodeAt();

    if (alterar2 >= 65 && alterar2 <= 90) {
      cifrar2 = ((alterar2 - 90 - Chave)%26) + 90;
      printar2 +=  String.fromCharCode(cifrar2); 
   } 
 
   if (alterar2 >= 97 && alterar2 <= 122) {
      cifrarmin2 = ((alterar2 - 122 - Chave)%26) + 122;
      printar2 +=  String.fromCharCode(cifrarmin2);
 }
   if (alterar2 >= 32 && alterar2 <= 64) {
      cifraresp2 = ((alterar2 - 32 + Chave)%26) + 32;
      printar2 +=  String.fromCharCode(cifraresp2);
 }
  } 
  return printar2;
}
