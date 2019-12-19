function block(){
    var xhr = new XMLHttpRequest();

    xhr.onload =function(){
        var nombre = xhr.responseText;
        var e = document.getElementById("ulblock");
        e.innerHTML = " ";
        var color = "A"
        for (i = 0; i <= nombre;i++) {
            var blockf = document.createElement("div");
            blockf.classList.add(color);
            if (color == "A"){
                color = "B";
            }else{
                color = "A"
            }
            blockf.innerText = i;
            var parent =  document.getElementById('ulblock');
            parent.appendChild(blockf);
        }
    };

    xhr.open('GET','http://jihane.fr/ajax/nombre.php')
    xhr.send()
}