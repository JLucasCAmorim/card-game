import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import { CardAPIResponse } from "../../modules/cards/dtos/card.dto"

export default function api(req: NextApiRequest, res: NextApiResponse) {
	if (req.query.amount) {
		// a slow endpoint for getting repo data
		axios
			.get("https://nekos.best/api/v2/neko", {
				params: { amount: req.query.amount },
			})
			.then((response) => response.data)
			.then((data: CardAPIResponse) => res.json(data))

		return
	}
}
