$(document).ready(function () {
    $('form').submit( function(){
        var api_weather = "3b434e703e98aba58f2c59311605557";
        var city = $("input#city").val();
        $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api_weather}`, function(res) {
            console.log(res)
        },"json");
        return false;
    })
});