var alertName = document.getElementById('alertName');
var alertEmail = document.getElementById('alertEmail');
var alertPassword = document.getElementById('alertPassword');

function checkName(field, err){
   
   var regex = new RegExp('^[a-zA-Z ]+$');

   if (!regex.test(field.value)) {

      alertName.classList.remove('invisible');
      alert(field, true);
      return false;
   }
   else{

      alertName.classList.add('invisible');
      alert(field, false);
      return true;
   }
}

function checkMail(field){

   var regex = new RegExp('^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$');
   
   if(!regex.test(field.value)){

      alertEmail.classList.remove('invisible');
      alert(field, true);
      return false;
   }
   else{

      alertEmail.classList.add('invisible');
      alert(field, false);
      return true;
   }
}

function checkPassword(field, err) {

   var regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[/!@#\$%\^&\*])(?=.{8,})');

   if (!regex.test(field.value)) {

      alertPassword.classList.remove('invisible');
      alert(field, true);
      return false;
   }
   else{
      
      alertPassword.classList.add('invisible');
      alert(field, false);
      return true;
   }
}

function alert(field, err){
   
   if(err){

      field.style.backgroundColor = "#C97064";
   }
  else{

      field.style.backgroundColor = "";
  }
}
