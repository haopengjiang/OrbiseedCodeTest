module.exports.findValueWithMinLabel = function (arr) {
	return parseInt(
		arr
			.map((str) => ({
				type: str.split(":")[0],
				value: str.split(":")[1],
			}))
			.find((obj) => obj.type === "min").value
	);
};

module.exports.findValueWithMaxLabel = function (arr) {
	return parseInt(
		arr
			.map((str) => ({
				type: str.split(":")[0],
				value: str.split(":")[1],
			}))
			.find((obj) => obj.type === "max").value
	);
};
