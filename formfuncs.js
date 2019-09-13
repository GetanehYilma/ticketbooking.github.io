$(function () {
    // alert('Hello World From JQuery.');
    $("input").addClass("makeBlock");
    $("#booking").on('submit', validateForm);

    function validateForm(event) {
        if ($("#fname").val() == "" || $("#name".val().length <= 0)) {
            $("#forError").prepend($("<p>", {
                "class": "error", "text": "Name cannot be empty!"
            }));
            event.preventDefault();
        }
        else if ($("#zip").val().length !== 5){
                $("#forError").prepend($("<p>", {
                    "class" : "error", "text" : "Enter a 5 digit zip code!"
                }));
            event.preventDefault();
            }
        else if ($("#seat").val() == ""){
            $("#forError").prepend($("<p>", {
                "class" : "error", "text" : "Enter number of seats!"
            }));
            event.preventDefault();
        }

    }

});