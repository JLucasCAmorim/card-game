import { User } from "@/modules/users/dtos/user.dto"
import { UsersOutput } from "@/modules/users/domain/users.output"

export const getUser = async ({
	usersOutput,
}: {
	usersOutput: UsersOutput
}): Promise<User | null> => {
	try {
		return await usersOutput.getUser()
	} catch (error: any) {
		throw new Error(error)
	}
}

export const addUser = async ({
	usersOutput,
	id,
	username,
	created_at,
}: {
	usersOutput: UsersOutput
	id: string
	username: string
	created_at: Date
}): Promise<User[]> => {
	try {
		return await usersOutput.addUser({ id, username, created_at })
	} catch (error: any) {
		throw new Error(error)
	}
}
