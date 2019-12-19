var cpt = 0


function apres(){
    var apresf = document.createElement("p");
    apresf.setAttribute("id","enfant_" + cpt);
    cpt ++;
    document.body.appendChild(apresf);

    var aprest = document.createTextNode("ceci est du texte après");apresf.appendChild(aprest);
}


function avant(){
    var avantt = document.createElement("li");
    avantt.innerText="ceci est du texte avant";

    var cible = document.getElementById("cible")
    document.body.insertBefore(avantt, cible);
}