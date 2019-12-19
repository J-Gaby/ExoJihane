 
function block(){
    var xhr = new XMLHttpRequest();

    xhr.onload =function(){
        var nombre = xhr.responseText;
        var e = document.getElementById("ulblock");
        e.innerHTML = " ";
        for (i = 0; i <= nombre;i++ ) {
            var blockf = document.createElement("div");
            blockf.innerText = i;
            var parent =  document.getElementById('ulblock');
            parent.appendChild(blockf);
        }
    };

    xhr.open('GET','script.php')
    xhr.send()
}