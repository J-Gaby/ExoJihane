$("#btn1").on("click", function() {
    $("p+ul li:first-child").text("Hello word")
});

$("#btn2").on("click", function() {
    $("p+ul li:nth-child(2)").append("ceci est un ajout")
});

$("#btn3").on("click", function() {
    $("p+ul li:nth-child(3)").prepend("ceci est un ajout")
});

$("#btn4").on("click", function() {
    $("p+ul li:first-child").before("ceci est un nouveau li")
});

$("#btn5").on("click", function() {
    var cloneul = $("ul+ul").clone()
    $("p+ul").before(cloneul)
});