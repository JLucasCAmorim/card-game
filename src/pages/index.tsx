import type { NextPage } from "next"
import UserModalLoginContainer from "@/modules/users/application/user-sign-in/user-modal-login.container"
import LoadSpinner from "../components/LoadSpinner"
import { useUsers } from "../hooks/useUsers"

const Home: NextPage = () => {
	const { loading } = useUsers()
	return (
		<div className="h-screen flex bg-gray-bg1">
			<div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
				<h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
					Press the button below to add your nickname and start the
					game!
				</h1>
				<UserModalLoginContainer />
				<LoadSpinner loading={loading} />
			</div>
		</div>
	)
}

export default Home
