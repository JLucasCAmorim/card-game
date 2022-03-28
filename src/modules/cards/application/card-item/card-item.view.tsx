import Image from "next/image"
import { memo } from "react"
import classNames from "classnames"
import { Card } from "../../dtos/card.dto"
import styles from "./card-item.module.css"
import { ImPower } from "react-icons/im"

interface CardItemViewProps {
	card: Card
}

const CardItemView = ({ card }: CardItemViewProps) => {
	const generateRandom = (min = 0, max = 10) => {
		// find diff
		const difference = max - min

		// generate random number
		let rand = Math.random()

		// multiply with difference
		rand = Math.floor(rand * difference)

		// add with min value
		rand = rand + min

		return rand
	}
	return (
		<div className={classNames([styles.wrapper, styles.wrapperAnime])}>
			<div className={styles.header}>
				<div className={styles.imageWrapper}>
					<Image
						src={card.url}
						layout={"intrinsic"}
						placeholder="blur"
						height={300}
						width={400}
						quality={50}
						className={styles.image}
						blurDataURL={`${card.url}?quality=20`}
						alt=""
					/>
				</div>
				<div className={styles.badgeWrapper}>
					<div
						className={classNames([
							styles.primaryBadge,
							styles.badgeAnime,
							"group",
						])}
					>
						<ImPower />
						<span
							className={classNames([
								styles.counter,
								"group-hover:text-white",
							])}
						>
							{generateRandom()}
						</span>
					</div>
				</div>
			</div>
			<div className={styles.textWrapper}>
				<h1 className={styles.artist}>{card.artist_name}</h1>
				<span className={styles.text}>
					This card was created by {card.artist_name} and you can find
					more information about this card on this link:{" "}
					{card.source_url}
				</span>
			</div>
		</div>
	)
}
export default memo(CardItemView)
