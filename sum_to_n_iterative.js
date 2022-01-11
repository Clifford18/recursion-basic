function sum_to_n_iterative(n) {
	var total = 0;
	for (i = 0; i <= n; i += 1) {

		total += i;
	}
	console.log('Total : ' + total);
}

module.exports = {sum_to_n_iterative};