$(document).ready(function () {

$('button.home').click(function(){
     alert("you have clicked a button!");
});

$(".slide_toggle").click(function(){
    $(this).next().toggle("slide");
});

$("p").hide();

$("h2").click(function(){
    $("p").show();
});

$(".show").click(function () {
    $("p").show("slow");
});

$("h1").hover(function(){
    $("h1").text("Welcome to my page!!")
});

// $(".header.exit").click(function () {
//     $("").append("<b>Appended text</b>");
// });

$("button").click(function(){
    $("button").css("background-color","yellow");
});


}); 


