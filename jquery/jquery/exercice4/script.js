$("#green").on("click", function() {
    $("p").hide()
});

$("#blue").on("click", function() {
    $("p").show()
});

$("#orange").on("click", function() {
    $("li").hide()
});

$("#yellow").on("click", function() {
    $("li").show()
});

$("#red").on("click", function() {
    $("p").hide("fast")
});

$("#pink").on("click", function() {
    $("li").show("slow")
});

$("#marronp").on("click", function() { 
    $("p").fadeIn()
});

$("#marronli").on("click", function() { 
    $("li").fadeOut()
});