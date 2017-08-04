module.exports = (func, export) => {
	export[func.name] = func;
}
