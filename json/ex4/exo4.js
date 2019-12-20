var nom = document.getElementById("f");

alert(nom);

/*function pays(){

    var xhr = new XMLHttpRequest();
    
    xhr.onload =function(){
        var paysf = document.createElement("li");
        paysf.innerText=JSON.parse(xhr.responseText).pays.nom;
        var parent =  document.getElementById('ulpays');
        parent.appendChild(paysf);
    };

    xhr.open('GET','http://jihane.fr/ajax/jpays.php')
    xhr.send()
}*/