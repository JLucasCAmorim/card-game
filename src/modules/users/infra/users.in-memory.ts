import { UsersOutput } from "@/modules/users/domain/users.output"
import { User, AddUserDto } from "@/modules/users/dtos/user.dto"

export class UsersInMemory implements UsersOutput {
	private users: User[] | undefined = []
	private user: User | undefined = {
		id: "",
		username: "",
		created_at: new Date(),
	}

	setUser(user: User | undefined): void {
		this.user = user ? { ...user } : undefined
	}

	setUsers(users: User[] | undefined): void {
		this.users = users ? [...users] : undefined
	}

	mapToDomainModel(infraModel: User[]): User[] {
		return infraModel.map((infraModel: User) => ({
			id: infraModel.id,
			username: infraModel.username,
			created_at: infraModel.created_at,
		}))
	}

	getUsers(): Promise<User[]> {
		if (!this.users) {
			throw new Error("Please create a user")
		}

		const users: User[] = this.mapToDomainModel(this.users)

		return Promise.resolve(users)
	}

	getUser(): Promise<User> {
		if (!this.user) {
			throw new Error("Please create a user")
		}

		const user: User = this.user

		return Promise.resolve(user)
	}

	addUser({ id, username, created_at }: AddUserDto): Promise<User[]> {
		if (!this.users)
			throw new Error("An error occurred while adding the user")

		const user: User = {
			id,
			username,
			created_at,
		}

		this.users.push(user)
		this.user = user

		const users: User[] = this.mapToDomainModel(this.users)

		return Promise.resolve(users)
	}
}
