import { useForm } from "react-hook-form"
import { useUsers } from "@/hooks/useUsers"
import { useRouter } from "next/router"

interface UserSignInProps {
	onClose: () => void
}

type FormData = {
	username: string
}

const UserSignInView = ({ onClose }: UserSignInProps) => {
	const { createUser } = useUsers()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			username: "",
		},
	})
	const { push } = useRouter()

	const onSubmit = handleSubmit(async (data) => {
		await createUser({
			username: data.username,
			created_at: new Date(),
		})
		reset()
		onClose()
		push("/cards/")
	})

	return (
		<div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
			<div className="relative w-2/3 my-6 mx-auto max-w-3xl">
				<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
					<form onSubmit={onSubmit}>
						<div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
							<h3 className="text-3xl text-white font=semibold">
								Sign-In
							</h3>
							<button
								className="h-6 w-6 flex text-center items-center justify-center bg-gray-400 border-0 rounded-full text-black float-right"
								onClick={() => onClose()}
							>
								<span className="text-sm">X</span>
							</button>
						</div>
						<div className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
							<div className="relative p-6 flex-auto">
								<label className="block text-black text-sm font-bold mb-1">
									User Name
								</label>
								<input
									autoFocus
									{...register("username", {
										required: true,
									})}
									className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
								/>
								{errors.username &&
									errors.username.type === "required" && (
										<span
											className="m-2.5 text-red-400"
											role="alert"
										>
											This is required
										</span>
									)}

								{errors.username && errors.username.message && (
									<span
										className="m-2.5 text-red-400"
										role="alert"
									>
										{errors.username.message}
									</span>
								)}
							</div>
						</div>
						<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
							<button
								className="text-white bg-blue-400 active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
								type="submit"
							>
								Look the cards
							</button>
							<button
								className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
								type="button"
								onClick={() => onClose()}
							>
								Close
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default UserSignInView
