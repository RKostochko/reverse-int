module.exports = function reverse(n) {
	const arr = n.toString().split('').reverse();
	return arr.join('').replace(/[^0-9]/g, '');
}
