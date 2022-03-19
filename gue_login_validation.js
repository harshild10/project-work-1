//for Guest login page
document.addEventListener('DOMContentLoaded',function formValidation(){
  document.querySelector('form').onsubmit = function formValidation(){
    var uname = document.querySelector('#uname');
    var uemail = document.querySelector('#uemail');
    var uphno = document.querySelector('#uphno');
    if(uname_validation(uname)){
      if(uemail_validation(uemail)){
        if(uphno_validation(uphno)){
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

function uphno_validation(uphno){
    if(uphno.value.length != 10){
      alert("Enter a valid Phone Number!!");
      uphno.focus();
      return false;
    }
  window.location.replace("questions1.html")
  return true;
}
