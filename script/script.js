$(document).ready(function() {

    // Verification des mots de passe
    $("#btn_submit").click(verifSubmit)

    function verifSubmit() {

        $("input").each(function(i){
            if ($("input").val() == false) {
              $(this).css("border", "1px solid red")
            }
        });

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
