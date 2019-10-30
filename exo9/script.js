function checkPalindrome() {
	
	var content = document.getElementById('content').value;
	var regex = new RegExp(/[^A-Za-z0-9]/g);
	var palindrome = content.toLowerCase().replace(regex,'');
	var len = palindrome.length;

	for(var i = 0; i < len/2; i++){
		//Compare the value of the first letter 'palindrome[i]' and the last letter 'palindrome[len - 1 - i]
		if (palindrome[i] !== palindrome[len- 1 - i]) {
			alert('Ce n\'est pas un palindrome !');
			return false;
		}
	}
	//if the upper condition is not true the function will end the loop and return true
	alert('C\'est un palindrome !');
	return true;

}
