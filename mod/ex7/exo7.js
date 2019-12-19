function titre(){
    var titref = document.createElement("h1");
    titref.setAttribute("id","enfant_3");
    document.body.appendChild(titref);

    var titret = document.createTextNode("Mon titre !");titref.appendChild(titret);
}

function contenu(){
    var contenuf = document.createElement("p");
    contenuf.setAttribute("id","enfant_3");
    document.body.appendChild(contenuf);

    var contenut = document.createTextNode("ceci est du contenu");contenuf.appendChild(contenut);
}