
function checkPhoneNumber(){
    
    var reg = new RegExp('^(01|06|07)[0-9]{8}');
    var phoneNum = document.getElementById('phoneNumber').value;
    
    if(!reg.test(phoneNum)){
        console.log('false');
    }
    else{
        console.log('true');
    }
}

