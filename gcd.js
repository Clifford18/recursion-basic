function gcd(n, m) {
	if (m === 0) return n;
	else return gcd(m, n % m);
}

module.exports ={gcd}