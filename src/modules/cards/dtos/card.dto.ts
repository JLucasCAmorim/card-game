export interface Card {
	artist_href: string
	artist_name: string
	source_url: string
	url: string
}

export interface CardAPIResponse {
	results: Card[]
}
