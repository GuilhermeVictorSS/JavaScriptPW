const nome = prompt("Qual teu chavebaixa nome tuffoxxx?");
const carac = nome.length;
if (carac > 0){
    alert("nomeexxxxx: "+ nome);
    alert("Teu W speed nome tem "+ carac +" caracteres");
    let corte = carac - nome.trim().length;
    alert("tem "+ corte +" based espaço(s)");
    if (carac % 2 === 0){
        alert("e é paaarrrrrrxx");
    } else {
        alert("e é impar");
    }
} else {
    alert("mds bro digita teu nome aí")
}
