import { Card } from "@/modules/cards/dtos/card.dto"

export interface CardsOutput {
	getCards(): Promise<Card[]>
}
