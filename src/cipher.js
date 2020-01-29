window.cipher = {
  encode: encode,
  decode: decode
};

function encode(messageEncode, key) {
  let printEncode="";
  for (let i=0; i < messageEncode.length; i++) {
    let changeEnc = messageEncode[i].charCodeAt();
    if (changeEnc >= 65 && changeEnc <= 90) {
      let cipherEcondeUppercase = ((changeEnc - 65 + key)%26) + 65;
      printEncode += String.fromCharCode(cipherEcondeUppercase); 
    } else if (changeEnc >= 97 && changeEnc <= 122) {
      let cipherEncodelowercase = ((changeEnc - 97 + key)%26) + 97;
      printEncode += String.fromCharCode(cipherEncodelowercase );
    } else {
      let resultCipherEncode = ((changeEnc - 32 + key)%33) + 32;
      printEncode += String.fromCharCode(resultCipherEncode);
    }
  }
  return printEncode;
}

function decode(messageDecode, key) {
  let printDecode="";
  for (let i=0; i < messageDecode.length; i++) {
    let changeDec = messageDecode[i].charCodeAt();
    if (changeDec >= 65 && changeDec <= 90) {
      let cipherDecodeUppercase = ((changeDec - 90 - key)%26) + 90;
      printDecode += String.fromCharCode(cipherDecodeUppercase); 
    } else if (changeDec >= 97 && changeDec <= 122) {
      let cipherDecodelowercase = ((changeDec - 122 - key)%26) + 122;
      printDecode += String.fromCharCode(cipherDecodelowercase);
    } else {
      let resultCipherDecode = ((changeDec - 64 - key)%33) + 64;
      printDec += String.fromCharCode(resultCipherDecode);
    }
  } 
  return printDecode;
}
