import { Card } from "@/modules/cards/dtos/card.dto"
import { CardsOutput } from "@/modules/cards/domain/cards.output"

export const getCards = async ({
	cardsOutput,
}: {
	cardsOutput: CardsOutput
}): Promise<Card[]> => {
	try {
		return await cardsOutput.getCards()
	} catch (error: any) {
		throw new Error(error)
	}
}
