document.getElementById("click1").addEventListener("click",sendEncode);
function sendEncode() {
  let messageEncode = document.getElementById("msg-encode").value;
  let key = Number(document.getElementById("chaveoffset").value);
  let resultEncode = window.cipher.encode(messageEncode, key);

  document.getElementById("result-send-encode").innerHTML += resultEncode;
}

document.getElementById("click2").addEventListener("click", sendDecode);
function sendDecode() {
  let messageDecode = document.getElementById("msg-decode").value;
  let key = Number(document.getElementById("chaveoffset").value);
  let resultDecode = window.cipher.decode(messageDecode, key);

  document.getElementById("result-send-decode").innerHTML += resultDecode;
}