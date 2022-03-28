import { User } from "../dtos/user.dto"

export const mapUserToApplicationModel = (users: User[]): User[] => {
	return users.map((user: User) => ({
		id: user.id,
		username: user.username,
		created_at: user.created_at,
	}))
}
