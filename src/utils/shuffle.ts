export const shuffle = (a: any[], b?: any, c?: any, d?: any) => {
	c = a.length
	while (c)
		(b = (Math.random() * (--c + 1)) | 0),
			(d = a[c]),
			(a[c] = a[b]),
			(a[b] = d)
	return a
}
