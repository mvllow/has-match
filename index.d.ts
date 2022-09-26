export default function hasMatch<T>(
	source: T | Record<string, unknown>,
	search: string,
	includeKeys?: string[]
): boolean
