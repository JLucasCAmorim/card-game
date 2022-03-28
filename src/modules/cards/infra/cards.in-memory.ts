import { CardsOutput } from "@/modules/cards/domain/cards.output"
import { Card } from "@/modules/cards/dtos/card.dto"

export class CardsInMemory implements CardsOutput {
	private cards: Card[] | undefined = []

	setCards(cards: Card[] | undefined): void {
		this.cards = cards ? [...cards] : undefined
	}

	mapToDomainModel(infraModel: Card[]): Card[] {
		return infraModel.map((infraModel: Card) => ({
			artist_href: infraModel.artist_href,
			artist_name: infraModel.artist_name,
			source_url: infraModel.source_url,
			url: infraModel.url,
		}))
	}

	getCards(): Promise<Card[]> {
		if (!this.cards) {
			throw new Error("Please create a card")
		}

		const cards: Card[] = this.mapToDomainModel(this.cards)

		return Promise.resolve(cards)
	}
}
