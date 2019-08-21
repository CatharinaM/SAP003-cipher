function Enviar1(){
    let inputMensagem1 = document.getElementById("msgc").value;
    let inputChave = document.getElementById("chaveoffset").value;
    let resultEnviar1 = cipher.encode(inputChave,inputMensagem1);

document.getElementById("result").innnerHTML= "Sua mensagem é: ${resultEnviar1} ";
}


// function Enviar2(){
//     let inputMensagem2 = document.getElementById("msgd").value;
//     let inputChave = document.getElementById("chaveoffset").value;
//     return decode(inputChave,inputMensagem2);

// }

