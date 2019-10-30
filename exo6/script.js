
function checkPhoneNumber(){
    //regex: O1, O6 or O7 for the first two numbers with '^' then [0 to 9] are accepted.
    //the length must be {8}
    var reg = new RegExp('^(01|06|07)[0-9]{8}');
    var phoneNum = document.getElementById('phoneNumber').value;
    
    if(!reg.test(phoneNum)){
        console.log('false');
        return false; 
    }
    else{
        console.log('true');
        return true; 
    }
}

