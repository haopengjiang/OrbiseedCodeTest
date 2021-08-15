module.exports.filterModelOrMake = function (data, type, propertyName) {
	if (type) {
		if (typeof type === "string") {
			data = data.filter(
				(car) => car[propertyName].toLowerCase() === type.toLowerCase()
			);
		} else if (Array.isArray(type)) {
			type = type.map((t) => t.toLowerCase());
			data = data.filter((car) =>
				type.includes(car[propertyName].toLowerCase())
			);
		}
	}
	return data;
};

module.exports.filterYearOrPrice = function (data, type, propertyName) {
	if (type) {
		if (typeof type === "string") {
			if (type.split(":")[0] === "min") {
				let lowest = parseInt(type.split(":")[1]);
				data = data.filter((car) => car[propertyName] >= lowest);
			}
			if (type.split(":")[0] === "max") {
				let highest = parseInt(type.split(":")[1]);
				data = data.filter((car) => car[propertyName] <= highest);
			}
		} else if (Array.isArray(type)) {
			let lowest = findValueWithLabel(type,'min');
			let highest = findValueWithLabel(type,'max');

			data = data.filter(
				(car) => car[propertyName] <= highest && car[propertyName] >= lowest
			);
		}
	}
	return data;
};

module.exports.sortYearOrPrice = function (data, sort) {
	if (sort) {
		if (sort.trim() === "year") {
			data = sortDesc(data, "year");
		}
		if (sort === "-year") {
			data = sortAsc(data, "year");
		}
		if (sort.trim() === "price") {
			data = sortDesc(data, "price");
		}
		if (sort === "-price") {
			data = sortAsc(data, "price");
		}
	}
	return data;
};

const sortDesc = function (data, type) {
	return data.sort(function (a, b) {
		return b[type] - a[type];
	});
};

const sortAsc = function (data, type) {
	return data.sort(function (a, b) {
		return a[type] - b[type];
	});
};

const findValueWithLabel = function (arr,label) {
	return parseInt(
		arr
			.map((str) => ({
				type: str.split(":")[0],
				value: str.split(":")[1],
			}))
			.find((obj) => obj.type === label).value
	);
};


module.exports.findValueWithLabel = findValueWithLabel;
