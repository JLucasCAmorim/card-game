import CardContext, { CardContextProps } from "@/contexts/CardContext"
import { useContextSelector } from "use-context-selector"

export const useCards = (): CardContextProps => {
	const cards = useContextSelector(CardContext, (context) => context.cards)

	const amount = useContextSelector(CardContext, (context) => context.amount)

	const updateCardAmount = useContextSelector(
		CardContext,
		(context) => context.updateCardAmount
	)

	const shuffleHand = useContextSelector(
		CardContext,
		(context) => context.shuffleHand
	)

	return {
		cards,
		amount,
		updateCardAmount,
		shuffleHand,
	}
}
