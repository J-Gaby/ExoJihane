function titrehun(){
    var titret = document.createElement("h1");
    titret.setAttribute("id","cible");
    titret.innerText="Titre 1";

    var cible = document.getElementById("cible");
    document.body.replaceChild(titret, cible);
}

function titrehdeux(){
    var titrett = document.createElement("h2");
    titrett.setAttribute("id","cible");
    titrett.innerText="Titre 2";

    var cible = document.getElementById("cible");
    document.body.replaceChild(titrett, cible);
}