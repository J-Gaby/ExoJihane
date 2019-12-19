function pays(){

    var xhr = new XMLHttpRequest();
    
    xhr.onload =function(){
        if (JSON.parse(xhr.responseText).pays.continent == "EU"){
            var paysf = document.createElement("li");
            paysf.innerText=JSON.parse(xhr.responseText).pays.nom;
            var parent =  document.getElementById('europe');
            parent.appendChild(paysf);
        }else if(JSON.parse(xhr.responseText).pays.continent == "AS"){
            var paysf = document.createElement("li");
            paysf.innerText=JSON.parse(xhr.responseText).pays.nom;
            var parent =  document.getElementById('asie');
            parent.appendChild(paysf);
        }else{
            var paysf = document.createElement("li");
            paysf.innerText=JSON.parse(xhr.responseText).pays.nom;
            var parent =  document.getElementById('afrique');
            parent.appendChild(paysf);
        }
    };

    xhr.open('GET','http://jihane.fr/ajax/jpays.php')
    xhr.send()
}