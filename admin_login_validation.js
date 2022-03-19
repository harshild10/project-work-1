//for Admin login page
document.addEventListener('DOMContentLoaded',function formValidation(){
  document.querySelector('form').onsubmit = function formValidation(){
    var uname = document.querySelector('#uname');
    var uemail = document.querySelector('#uemail');
    var upass = document.querySelector('#upass');
    if(uname_validation(uname)){
      if(uemail_validation(uemail)){
        if(upass_validation(upass,6)){
        }
      }
    }
    return false;
  };
});

function uname_validation(uname){
  if(uname.value.length == 0){
    alert("Username can't be empty!!");
    uname.focus();
    return false;
  }
  return true;
}

function uemail_validation(uemail){
  var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(uemail.value.match(emailformat)){
  return true;
  }
  else{
  alert("You have entered an invalid email address!");
  uemail.focus();
  return false;
  }
}



function upass_validation(upass,min){
  var passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;;
    if(upass.value.length < min){
      alert("Password Too Short!! Should be of 6 or more character");
      upass.focus();
      return false;
    }
    else if(upass.value.match(passformat)){
      window. location. replace("admin_data.html")
      return true;
    }
    else{
      alert("Please use atleast one lowercase letter, one uppercase letter, one numeric digit, and one special character!!");
      upass.focus();
      return false;
    }
}
