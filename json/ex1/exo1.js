var data = {
    "debug": "on",
    "title": "Sample Konfabulator",
    "name": "main_window",
    "width": "500",
    "height": "500",
    "src": "Images/Sun.png",
    "hOffset": "250",
    "vOffset": "250",
    "alignment": "center"
}

//troisiem solution

var parent = document.getElementById("tab");

function create_function(parent,key,value){
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerText = key;
    var td2 = document.createElement("td");
    td2.innerText = value;
    tr.appendChild(td);
    tr.appendChild(td2);
    parent.appendChild(tr);
}

for (key in data) {
    create_function(parent, key, data[key]);
}

//deuxieme solution

/*var parent = document.getElementById("tab");

function create_function(parent,key,value){
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerText = key;
    var td2 = document.createElement("td");
    td2.innerText = value;
    tr.appendChild(td);
    tr.appendChild(td2);
    parent.appendChild(tr);
}

create_function(parent,"debug",data.debug)
create_function(parent,"title",data.title)
create_function(parent,"name",data.name)
create_function(parent,"width",data.width)
create_function(parent,"height",data.height)
create_function(parent,"src",data.src)
create_function(parent,"hOffset",data.hOffset)
create_function(parent,"vOffset",data.vOffset)
create_function(parent,"alignment",data.alignment)*/

//premiere solution

/*var parent = document.getElementById("tab");

var tr = document.createElement("tr");

var td = document.createElement("td");
td.innerText = "debug";

var td2 = document.createElement("td");
td2.innerText = data.debug;

tr.appendChild(td);
tr.appendChild(td2);
parent.appendChild(tr);

var parent = document.getElementById("tab");

var tr = document.createElement("tr");

var td = document.createElement("td");
td.innerText = "title";

var td2 = document.createElement("td");
td2.innerText = data.title;

tr.appendChild(td);
tr.appendChild(td2);
parent.appendChild(tr);

var parent = document.getElementById("tab");

var tr = document.createElement("tr");

var td = document.createElement("td");
td.innerText = "name";

var td2 = document.createElement("td");
td2.innerText = data.name;

tr.appendChild(td);
tr.appendChild(td2);
parent.appendChild(tr);

var parent = document.getElementById("tab");

var tr = document.createElement("tr");

var td = document.createElement("td");
td.innerText = "width";

var td2 = document.createElement("td");
td2.innerText = data.width;

tr.appendChild(td);
tr.appendChild(td2);
parent.appendChild(tr);

var parent = document.getElementById("tab");

var tr = document.createElement("tr");

var td = document.createElement("td");
td.innerText = "height";

var td2 = document.createElement("td");
td2.innerText = data.height;

tr.appendChild(td);
tr.appendChild(td2);
parent.appendChild(tr);

var parent = document.getElementById("tab");

var tr = document.createElement("tr");

var td = document.createElement("td");
td.innerText = "src";

var td2 = document.createElement("td");
td2.innerText = data.src;

tr.appendChild(td);
tr.appendChild(td2);
parent.appendChild(tr);

var parent = document.getElementById("tab");

var tr = document.createElement("tr");

var td = document.createElement("td");
td.innerText = "hOffset";

var td2 = document.createElement("td");
td2.innerText = data.hOffset;

tr.appendChild(td);
tr.appendChild(td2);
parent.appendChild(tr);

var parent = document.getElementById("tab");

var tr = document.createElement("tr");

var td = document.createElement("td");
td.innerText = "vOffset";

var td2 = document.createElement("td");
td2.innerText = data.vOffset;

tr.appendChild(td);
tr.appendChild(td2);
parent.appendChild(tr);

var parent = document.getElementById("tab");

var tr = document.createElement("tr");

var td = document.createElement("td");
td.innerText = "alignment";

var td2 = document.createElement("td");
td2.innerText = data.alignment;

tr.appendChild(td);
tr.appendChild(td2);
parent.appendChild(tr);*/