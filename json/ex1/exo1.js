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

var parent = document.getElementById("tab");

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
parent.appendChild(tr);