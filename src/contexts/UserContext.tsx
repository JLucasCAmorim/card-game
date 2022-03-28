import { useState, ReactNode, useCallback } from "react"

import { createContext } from "use-context-selector"
import { User } from "../modules/users/dtos/user.dto"
import { outputs } from "../config/outputs"
import { v4 as uuidv4 } from "uuid"
import { addUser, getUser } from "@/modules/users/domain/users.actions"

interface CreateUser {
	username: string
	created_at: Date
}

export interface UserContextProps {
	users: User[]
	user: User | null
	loading: boolean
	createUser: (data: CreateUser) => Promise<void>
	loadUser: () => Promise<void>
}

const UserContext = createContext<UserContextProps>({} as UserContextProps)

export default UserContext

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const [users, setUsers] = useState<User[]>([])
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState<boolean>(false)

	const loadUser = useCallback(async (): Promise<void> => {
		try {
			setLoading(true)
			const user: User | null = await getUser({
				usersOutput: outputs.usersOutput,
			})
			setUser(user)
			setLoading(false)
		} catch {}
	}, [])

	const createUser = useCallback(async (data: CreateUser): Promise<void> => {
		try {
			setLoading(true)
			const users = await addUser({
				usersOutput: outputs.usersOutput,
				id: uuidv4(),
				username: data.username,
				created_at: data.created_at,
			})
			setUsers(users)
			setLoading(false)
		} catch {}
	}, [])

	return (
		<UserContext.Provider
			value={{
				users,
				user,
				loading,
				createUser,
				loadUser,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
