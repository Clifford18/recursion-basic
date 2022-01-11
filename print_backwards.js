function print_backwards(string) {
	if (string === "")
		return "";
	else
		return print_backwards(string.substr(1)) + string.charAt(0);
}

module.exports = {print_backwards};