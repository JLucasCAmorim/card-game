import { UsersOutput } from "@/modules/users/domain/users.output"
import { AddUserDto, User } from "@/modules/users/dtos/user.dto"

export class UsersLocalStorage implements UsersOutput {
	getLocalUser(): User {
		const localUser: string | null = localStorage.getItem("user")

		return localUser ? JSON.parse(localUser) : null
	}

	getLocalUsers(): User[] {
		const localUsers: string | null = localStorage.getItem("users")

		return localUsers ? JSON.parse(localUsers) : []
	}

	setLocalUsers(users: User[]): void {
		localStorage.setItem("users", JSON.stringify(users))
	}

	setLocalUser(user: User): void {
		localStorage.setItem("user", JSON.stringify(user))
	}

	getUser(): Promise<User | null> {
		const user: User = this.getLocalUser()

		return Promise.resolve(user)
	}

	getUsers(): Promise<User[]> {
		const users: User[] = this.getLocalUsers()

		return Promise.resolve(users)
	}

	addUser({ id, username, created_at }: AddUserDto): Promise<User[]> {
		return this.getUsers().then((users: User[]) => {
			const user: User = {
				id,
				username,
				created_at,
			}

			users.push(user)

			this.setLocalUser(user)
			this.setLocalUsers(users)

			return Promise.resolve(users)
		})
	}
}
