function capitalize(input) {
	if (typeof input != 'string') {
		throw new Error('Input must be a string');
	}
	return input.charAt(0).toUpperCase() + input.slice(1);
}

export default capitalize;
