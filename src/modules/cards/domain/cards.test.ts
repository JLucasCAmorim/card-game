import { Card } from "@/modules/cards/dtos/card.dto"
import { getCards } from "@/modules/cards/domain/cards.actions"
import { CardsInMemory } from "@/modules/cards/infra/cards.in-memory"
import { cardsInfrastructureFakes } from "@/modules/cards/infra/cards.fakes"

describe("[cards] unit tests", () => {
	const cardsOutput = new CardsInMemory()

	beforeEach(() => {
		cardsOutput.setCards([])
	})

	describe("when the user wants to get his cards", () => {
		it("should get them without error", async () => {
			cardsOutput.setCards(cardsInfrastructureFakes)

			const cards: Card[] = await getCards({
				cardsOutput,
			})

			const expectedCards: Card[] = cardsInfrastructureFakes.map(
				(infraModel: Card) => ({
					artist_href: infraModel.artist_href,
					artist_name: infraModel.artist_name,
					source_url: infraModel.source_url,
					url: infraModel.url,
				})
			)

			expect(cards).toEqual(expectedCards)
		})

		it("shouldn't get them and should throw error", async () => {
			cardsOutput.setCards(undefined)

			await expect(
				getCards({
					cardsOutput,
				})
			).rejects.toThrowError()
		})
	})
})
