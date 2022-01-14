function isPalindrome(str) {
	//base case
	if (str.length === 1)
		return true;
	if (str.length === 2)
		return str[0] === str[1];
	//general case
	if (str[0] === str.slice(-1))
		return isPalindrome(str.slice(1, -1)); //recursive call
	return false;
}

module.exports= {isPalindrome}

