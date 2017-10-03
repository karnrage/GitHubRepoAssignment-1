$(document).ready(function () {

    $("#button").click(function () {
        var first_name = $("#firstname").val();
        var last_name = $("#lastname").val();
        var email = $("#email").val();
        var contact = $("#contact").val();
            // console.log(contact)
        var new_row = "<tr><td>" + first_name + "</td><td>" + last_name + "</td><td>" + email + "</td><td>" + contact + "</td></tr>";
        $("table").append(new_row);
        return false;
    });

});