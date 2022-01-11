function sum_to_n(n) {
	if (n < 1) return 0;    // exit condition
	return n + sum_to_n(n - 1); // return value plus result of recursive call
}

module.exports = {sum_to_n};

// function sum_to_n(n) {
// 	return n && n  + sum_to_n(n - 1);
// }
