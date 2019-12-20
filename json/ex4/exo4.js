function recherchen(){

    var xhr = new XMLHttpRequest();
    
    xhr.onload =function(){
        var e = JSON.parse(xhr.responseText);
        var touche = document.getElementById("f").value;
        var urlserver = xhr.responseURL;
        var parent = document.getElementById("prenom");
        parent.innerHTML = " ";
        for (let i = 0; i < e.etudiants.length; i++) {
            var sectiona = document.createElement("p");
            sectiona.innerText += e.etudiants[i].prenom + " ";
            var parent = document.getElementById("prenom");
        parent.appendChild(sectiona)
        }

    
    };

    var touche = document.getElementById("f").value;

    xhr.open('GET','http://jihane.fr/ajax/dwmg2.php?query=' + touche)
    xhr.send()
}