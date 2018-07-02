$(document).ready(function() {

    // Verification des mots de passe
    $("#btn_submit").click(verifSubmit)
    var allInputs = $("input");

    function verifSubmit() {

        // input true or false
        $(allInputs).each(function(i) {
            if ($(this).val() == false) {
                $(this).css("border", "1px solid red");
                $(this).attr("placeholder", "Veuillez renseigner ce champ");
            }
        });

        // password identique ou pas
        if ($("#input_password").val() != $("#confirm_password").val()) {
            alert("Veuillez entrer des mots de passe identique");
        }
        return false;
    }
    // verification du pseudo
    $("#user_pseudo").focus(verifPseudo)

    function verifPseudo() {

    }

});
