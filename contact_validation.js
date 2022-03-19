//for contact page validation
document.addEventListener('DOMContentLoaded',function formValidation(){
  document.querySelector('form').onsubmit = function formValidation(){
    var fname = document.querySelector('#fname');
    var fmail = document.querySelector('#fmail');
    var ph = document.querySelector('#ph');

    if(fname_validation(fname)){
      if(fmail_validation(fmail)){
        if(ph_validation(ph)){
        }
      }
    }
    return false;
  };
});

function fname_validation(fname){
  if(fname.value.length == 0){
    alert("Username can't be empty!!");
    fname.focus();
    return false;
  }
  return true;
}

function fmail_validation(fmail){
  var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(fmail.value.match(emailformat)){
  return true;
  }
  else{
  alert("You have entered an invalid email address!");
  fmail.focus();
  return false;
  }
}

function ph_validation(ph){
    if(ph.value.length != 10){
      alert("Enter a valid Phone Number!!");
      ph.focus();
      return false;
    }
    window.location.reload()
    return true;
}
