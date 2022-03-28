import { useState } from "react"
import UserSignInView from "./user-signin.view"

const UserModalLoginContainer = () => {
	const [showModal, setShowModal] = useState(false)
	const onOpenModal = () => {
		setShowModal(true)
	}
	const onCloseModal = () => {
		setShowModal(false)
	}
	return (
		<>
			<button
				className="bg-blue-400 hover:bg-blue-500 w-full mt-5 text-white font-bold py-2 px-4 rounded-full"
				type="button"
				onClick={() => onOpenModal()}
			>
				Start the game
			</button>
			{showModal ? <UserSignInView onClose={onCloseModal} /> : null}
		</>
	)
}

export default UserModalLoginContainer
