const entradaDados = document.querySelector("#texto-digitado");
const criptografar = document.querySelector("#criptografar");
const descriptografar = document.querySelector("#descriptografar");
const saidaTxt = document.querySelector(".texto-normal");
const saidaMsg = document.querySelector(".texto-negrito");
const saidaImg = document.querySelector(".searching");
const saidaDados = document.querySelector("#saidaDados");
saidaDados.style.display = "none";
const copiaTxt = document.querySelector("#txt-transformado");
copiaTxt.style.display = "none";
const copiar = document.querySelector(".copiando-texto");
const btnCopiar = document.querySelector("#copiar"); 
btnCopiar.style.display="none";

criptografar.addEventListener("click", ()=>{
    trataTela();
    copiaTxt.innerHTML = crypto();
} )

descriptografar.addEventListener("click", ()=>{
    trataTela();
    copiaTxt.innerHTML= decrypto();  
});

copiar.addEventListener("click", ()=>{
    copiando();
})

entradaDados.addEventListener("keypress", e=>{
    if(!verificaCaracter(e)){
        e.preventDefault();
    };
})