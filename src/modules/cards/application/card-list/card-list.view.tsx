import { useCards } from "../../../../hooks/useCards"
import CardItemView from "../card-item/card-item.view"

const CardListView = () => {
	const { cards } = useCards()
	return (
		<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
			{cards &&
				cards.map((card) => (
					<CardItemView card={card} key={card.url} />
				))}
		</div>
	)
}
export default CardListView
