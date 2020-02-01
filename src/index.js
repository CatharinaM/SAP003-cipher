document.getElementById("click1").addEventListener("click",sendEncode);
function sendEncode() {
  const messageEncode = document.getElementById("msg-encode").value;
  const key = Number(document.getElementById("chaveoffset").value);
  const resultEncode = window.cipher.encode(messageEncode, key);

  document.getElementById("result-send-encode").innerHTML = resultEncode;
}

document.getElementById("click2").addEventListener("click", sendDecode);
function sendDecode() {
  const messageDecode = document.getElementById("msg-decode").value;
  const key = Number(document.getElementById("chaveoffset").value);
  const resultDecode = window.cipher.decode(messageDecode, key);

  document.getElementById("result-send-decode").innerHTML = resultDecode;
}