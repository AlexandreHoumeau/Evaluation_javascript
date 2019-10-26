
// function checkPalindrome() {
// 	var content = document.getElementById('content').value.normalize("NFD").replace(/[^\w]/gi, '').toLowerCase();
// 	var palindrome = content.split('').reverse().join('');
// 	console.log(palindrome);
// 	console.log(content)

// 	if (content === palindrome) {
// 		alert('c\'est un palindrome');
// 	}
// 	else
// 		alert('Ce n\'est pas un palindrome');
// }

function checkPalindrome() {
	
	var content = document.getElementById('content').value;
	console.log(content);
	var regex = new RegExp(/[^A-Za-z0-9]/g);
	var palindrome = content.toLowerCase().replace(regex,'');

	for(var i = 0; i < content.length/2; i++){
		console.log(palindrome[i]);

		if (palindrome[i] !== palindrome[content.length/2 - 1 - i]) {
			alert('Ce n\'est pas un palindrome !');
			return false;
		}

		else{
			alert('c\'est une palidrome');
			return true; 
		}
	}

	console.log(palindrome); 
}
