import { useState, ReactNode, useCallback, useEffect } from "react"

import { createContext } from "use-context-selector"
import { useToast } from "../hooks/useToast"
import useRequest from "../libs/useRequest"
import { Card, CardAPIResponse } from "../modules/cards/dtos/card.dto"
import { shuffle } from "../utils/shuffle"

export interface CardContextProps {
	cards: Card[] | undefined
	amount: number
	updateCardAmount: (quantity: number) => void
	shuffleHand: () => void
}

const CardContext = createContext<CardContextProps>({} as CardContextProps)

export default CardContext

export const CardProvider = ({ children }: { children: ReactNode }) => {
	const [deck, setDeck] = useState<Card[]>([])
	const [cards, setCards] = useState<Card[]>([])
	const [amount, setAmount] = useState<number>(5)
	const { addToast } = useToast()
	const { data } = useRequest<CardAPIResponse>({
		url: deck.length === 0 ? "/api/data" : undefined,
		params: { amount: 10 },
	})

	const getCardsFromDeck = useCallback((cards: Card[], quantity: number) => {
		const hand = cards.slice(0, quantity).map((card) => card)
		setCards(hand)
	}, [])

	const updateCardAmount = useCallback(
		(quantity: number) => {
			if (cards.length < 8) {
				setAmount(quantity)
				getCardsFromDeck(deck, quantity)
			} else {
				addToast({
					title: "Max number of Cards",
					description: "You already got the max cards from the deck",
					type: "info",
				})
			}
		},
		[cards.length, deck, getCardsFromDeck, addToast]
	)

	const shuffleHand = useCallback(() => {
		const newHand = shuffle(cards)
		setCards([...newHand])
	}, [cards])

	useEffect(() => {
		if (data) {
			setDeck(data.results)
			getCardsFromDeck(data.results, amount)
		}
	}, [amount, data, deck, getCardsFromDeck])

	return (
		<CardContext.Provider
			value={{
				cards,
				amount,
				updateCardAmount,
				shuffleHand,
			}}
		>
			{children}
		</CardContext.Provider>
	)
}
