$(function () {
    // alert('Hello World From JQuery.');
    $("input").addClass("makeBlock");
    $("#booking").on('submit', validateForm);

    function validateForm(event) {
        if ($("#name").val() == "" || $("#name".val().length <= 0)){
            $("#forError").prepend($("<p>", {
                "class" : "error", "text" : "Name cannot be empty!"
            }));
            event.preventDefault();
        }

    }

});