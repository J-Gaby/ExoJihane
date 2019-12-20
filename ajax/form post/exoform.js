 
function envoyer(){

    var xhr = new XMLHttpRequest();
    
    xhr.onload =function(){
        var ok = document.getElementById('ok');
        var erreur = document.getElementById('erreur');
        var text = xhr.responseText;
        
        if (text == "ok"){
            ok.className = "visible"
        }else{
            erreur.className = "visible"
        }
    };

    xhr.open('POST','http://jihane.fr/ajax/form.php');
    var formulaire = document.getElementById('form');
    var formData = new FormData(formulaire);

    xhr.send(formData);
}