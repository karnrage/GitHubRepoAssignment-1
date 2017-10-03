$(document).ready(function () {
    for(var i = 1; i < 151; i++) {
        $('.pokemon_box').append(`<img src='http://pokeapi.co/media/img/${i}.png' "id =${i}>`)
    }
    var proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = "http://pokeapi.co/api/v2/pokemon/1";
        $(document).on("click", "img", function () {
            $.get(proxyurl + url, function (res) {
                console.log(res)
                $(".index").append("<h1>" + res.name + "</h1>")
                $(".index").append("<img src='" + res.sprites.front_default + "'>");
                $(".index").append("<h3> Height:" + res.height + "</h3>")
                $(".index").append("<h3> Weight:" + res.weight + "</h3>")
                $(".index").append("<ul><h3>Types:</h3><li>" + res.types[0].type.name + "</li></ul>")
                $(".index").append("<ul><li>" + res.types[1].type.name + "</li></ul>")
                // for(var x = 0; x < res.type[types].length; x++);    
                // $(".index").append(res.type[types][x][name]);           
            }, 'json')
        });
});

