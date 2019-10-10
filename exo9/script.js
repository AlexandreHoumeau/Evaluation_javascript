
function checkPalindrome() {
	var content = document.getElementById('content').value.normalize("NFD").replace(/[^\w]/gi, '').toLowerCase();
	var palindrome = content.split('').reverse().join('');
	console.log(palindrome);
	console.log(content)

	if (content === palindrome) {
		alert('c\'est un palindrome');
	}
	else
		alert('Ce n\'est pas un palindrome');
}