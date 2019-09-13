$(function () {
    // alert('Hello World From JQuery.');
    $("input").addClass("makeBlock");
    $("#booking").on('submit', validateForm);
    // $('#booking').submit(validateForm());

    function validateForm(event) {
        // event.preventDefault();
        // $('#errors').empty();


        if ($("#fname").val() === "" || $("#name".val().length <= 0)) {
            $("#forError").prepend($("<p>", {
                "class": "error", "text": "Name cannot be empty!"
            }));

        }
        else if ($('#zip').val().length !== 5){
                $("#forError").prepend($("<p>", {
                    "class" : "error", "text" : "Enter a 5 digit zip code!"
                }));
            }
        else if ($('input[name="seatNumber"]').val() <= 0){
            $('#forError').prepend($('<p>', {
                "class" : "error", "text" : "Enter number of seats!"
            }));
            event.preventDefault();

        }

    }

});