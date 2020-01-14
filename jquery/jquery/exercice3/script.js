$("#green").on("click", function() {
    $("p").toggleClass("green")
    $("p").removeClass("blue")
});

$("#blue").on("click", function() {
    $("p").toggleClass("blue")
    $("p").removeClass("green")
});

$("#bold").on("click", function() {
    $("p").addClass("gras")
});

$("#ss_bold").on("click", function() {
    $("p").addClass("nongras")
});

$("#italic").on("click", function() {
    $("p").toggleClass("italic")
});