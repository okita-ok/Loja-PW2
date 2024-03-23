function geraLorem(paragrafos){
    const lorem = loremIpsum({
        count: paragrafos,
        units: "paragraphs"
    })
    console.log(lorem);
    return lorem;
}

document.getElementById("gerar").onclick = function(){
    let valor = document.getElementById("entrada").value;
    let texto = document.createElement("div");
    texto.innerHTML(geraLorem(valor));
    document.body.appendChild(texto);
}