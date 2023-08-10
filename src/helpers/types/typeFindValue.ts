export type typeFindValue = (
	obj: Record<string, string | unknown> | null,
	key: string,
) => string | unknown | null;
