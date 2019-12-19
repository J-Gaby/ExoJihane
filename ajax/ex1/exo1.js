 
function pays(){

    var xhr = new XMLHttpRequest();
    
    xhr.onload =function(){
        var paysf = document.createElement("li");
        paysf.innerText=xhr.responseText;
        var parent =  document.getElementById('ulpays');
        parent.appendChild(paysf);
    };

    xhr.open('GET','script.php')
    xhr.send()
}