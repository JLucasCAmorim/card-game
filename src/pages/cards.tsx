import type { NextPage } from "next"
import Image from "next/image"
import { useUsers } from "../hooks/useUsers"
import { useCards } from "../hooks/useCards"
import CardListView from "../modules/cards/application/card-list/card-list.view"
import { GiCardBurn } from "react-icons/gi"
import { ImShuffle } from "react-icons/im"
import { useEffect } from "react"

const Cards: NextPage = () => {
	const { user, loadUser } = useUsers()
	const { amount, updateCardAmount, shuffleHand } = useCards()

	useEffect(() => {
		loadUser()
	}, [loadUser])

	return (
		<div className="w-screen h-screen relative overflow-x-hidden">
			<nav className="bg-gray-800">
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-end h-16">
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<div className="ml-3 relative">
								<div className="flex flex-row text-white items-center">
									<div
										className="relative bg-gray-800 h-8 w-8 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
										id="user-menu-button"
										aria-expanded="false"
										aria-haspopup="true"
									>
										<Image
											className="rounded-full"
											src="/img/avatar-dev.png"
											layout="fill"
											objectFit="contain"
											alt="user avatar"
										/>
									</div>
									<span className="ml-2">
										Hello, {user?.username || "João"}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<CardListView />
			<div className="fixed right-10 bottom-5">
				<button
					onClick={() => updateCardAmount(amount + 1)}
					className="p-0 w-16 flex items-center justify-center h-16 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
				>
					<GiCardBurn fontSize={32} color="white" />
				</button>
			</div>
			<div className="fixed left-10 bottom-5">
				<button
					onClick={() => shuffleHand()}
					className="p-0 w-16 flex items-center justify-center h-16 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
				>
					<ImShuffle fontSize={24} color="white" />
				</button>
			</div>
		</div>
	)
}

export default Cards
