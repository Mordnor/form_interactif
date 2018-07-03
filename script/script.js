$(document).ready(function() {

    // Verification des mots de passe
    $("#validate").click(verifSubmit)
    var allInputs = $("input");

    function verifSubmit() {

        // input true or false
        $(allInputs).each(function(i) {
            if ($(this).val() == false) {
                // $(this).css("border", "1px solid red");
                $("small").css("color", "red")
            }
        });

        // password identique ou pas
        if ($("#input_password").val() != $("#confirm_password").val()) {
            alert("Veuillez entrer des mots de passe identique");
        }
        return false;
    }

    // Travel jquery

    $("#allez_retour").click(addInput)

    function addInput(){
        if(this.checked){
            $("#back_travel").addClass("d-block").removeClass("d-none");
        }
        else if (this.checked != true) {
            $("#back_travel").addClass("d-none").removeClass("d-block");
        }

    }

    function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var $result = $("#result");
  var email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(email + " is valid");
    $result.css("color", "green");
  } else {
    $result.text(email + " is not valid");
    $result.css("color", "red");
  }
  return false;
}

$("#validate").bind("click", validate);
});
