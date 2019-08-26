document.getElementById("click1").addEventListener("click",Enviar1);
function Enviar1(){
    let Mensagem1 = document.getElementById("msgc").value;
    let Chave = Number(document.getElementById("chaveoffset").value);
    let resultEnviar1 = window.cipher.encode(Mensagem1, Chave);

   document.getElementById("resultEnviar1").innerHTML += resultEnviar1;
}

document.getElementById("click2").addEventListener("click",Enviar2);
function Enviar2(){
    let Mensagem2 = document.getElementById("msgd").value;
    let Chave = Number(document.getElementById("chaveoffset").value);
    let resultEnviar2 = window.cipher.decode(Mensagem2, Chave);

   document.getElementById("resultEnviar2").innerHTML += resultEnviar2;
}