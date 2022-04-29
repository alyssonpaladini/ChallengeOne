function trataTela(){
    saidaMsg.style.display = "none";
    saidaImg.style.display = "none";
    saidaTxt.style.display = "none";
    
    copiar.style.display = "block";
    saidaDados.style.display = "block";
    copiaTxt.style.display = "block";
    btnCopiar.style.display="block";
}

function decrypto(){
    let decriptTxt = entradaDados.value.replaceAll("enter","e");
    decriptTxt = decriptTxt.replaceAll("imes","i");
    decriptTxt = decriptTxt.replaceAll("ai","a");
    decriptTxt = decriptTxt.replaceAll("ober","o");
    decriptTxt = decriptTxt.replaceAll("ufat","u");
    return decriptTxt;
}

function crypto(){
    let gerandoSplit = entradaDados.value.split("");
    let textoCripto = "";
    for (let i=0;i<gerandoSplit.length;i++){
        if(gerandoSplit[i]=="a"){
            gerandoSplit[i] = "ai";
        }else if(gerandoSplit[i]=="e"){
            gerandoSplit[i]="enter";
        }else if(gerandoSplit[i]=="i"){
            gerandoSplit[i]="imes";
        }else if(gerandoSplit[i]=="o"){
            gerandoSplit[i]="ober";
        }else if(gerandoSplit[i]=="u"){
            gerandoSplit[i]="ufat";
        }
        textoCripto = textoCripto + gerandoSplit[i]; 
    }
    return textoCripto;
}

function copiando(){
    copiaTxt.select();
    document.execCommand('copy');
    alert("Texto copiado, use Ctrl+V para colar!");
    entradaDados.value="";
    saidaMsg.style.display = "block";
    saidaImg.style.display = "block";
    saidaTxt.style.display = "block";
    saidaDados.style.display = "none";
    btnCopiar.style.display = "none";
}

function verificaCaracter(e){

    const char = String.fromCharCode(e.keyCode);
    const padrao = "[a-z0-9 ]";
    if(char.match(padrao)){
        return true;
    }
}