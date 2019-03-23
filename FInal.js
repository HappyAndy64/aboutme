function validate() {             //You Need this
  var missing = []
  if($("#name").val() == "")
      missing.push("name")
    if($("#email").val() == "")
      missing.push("email")
  if($("#message").val() == "")
    missing.push("message")
  if(missing.length>0) {
    $("#errormessage").css("color", "red")
    $("#errormessage").html("You are missing:" + missing)
    } 
  else {
    $("#errormessage").css("color", "green")
    $("#errormessage").html("Thank you for submitting!")  } 
      }
