export default function hasMatch(source, search, includeKeys) {
	const normalizedSearch = search.normalize().toLowerCase();

	return Object.keys(source).some((key) => {
		if (includeKeys?.length > 0 && !includeKeys.includes(key)) {
			return false;
		}

		const value = source[key];

		if (typeof value === "string") {
			return value.normalize().toLowerCase().includes(normalizedSearch);
		}

		if (Array.isArray(value)) {
			return value.some(
				(item) =>
					typeof item === "string" &&
					item.normalize().toLowerCase().includes(normalizedSearch)
			);
		}

		return false;
	});
}
