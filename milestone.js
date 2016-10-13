
function validateemail(email){
  return function(){
  var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return re.test(email);
}
}


function validateform(){
 return function(){
  if(document.getElementById("input1").value.length == 0) {
    document.getElementById("confirmed").innerHTML="Please input First Name";
    }
    else if(document.getElementById("input2").value.length == 0) {
      document.getElementById("confirmed").innerHTML="Please input Last Name";
    }
    else if(document.getElementById("emailin").value.length == 0 || !validateemail(document.getElementById("emailin").value)) {
      document.getElementById("confirmed").innerHTML="Please input Valid Email";
    }
    else if(document.getElementById("emailin2").value.length == 0 || document.getElementById("emailin2").value.localeCompare(document.getElementById("emailin").value)) {
      document.getElementById("confirmed").innerHTML="Emails do not match";
    }
    else {
      document.getElementById("confirmed").innerHTML="Success!";
    }
  }
}











document.getElementById("submit").addEventListener("click",validateform());
