$("#green").on("click", function() {
    $("p").css("color", "green")
});

$("#blue").on("click", function() {
    $("li").css("color", "blue")
});

$("#orange").on("click", function() {
    $("ul li:first-child").css("color", "orange")
});

$("#yellow").on("click", function() {
    $("ul li:nth-child(2)").css("color", "yellow")
});

$("#red").on("click", function() {
    $(".red").css("color", "red")
});

$("#pink").on("click", function() {
    $("ul+ul li:nth-child(2)").css("color", "pink")
});

$("#marron").on("click", function() { 
    $("p+ul li:nth-child(4)").css("color", "brown")
});