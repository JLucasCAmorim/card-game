import { User } from "@/modules/users/dtos/user.dto"
import { addUser, getUser } from "@/modules/users/domain/users.actions"
import { UsersInMemory } from "@/modules/users/infra/users.in-memory"
import { usersInfrastructureFakes } from "@/modules/users/infra/users.fakes"
import { v4 as uuidv4 } from "uuid"

describe("[users] unit tests", () => {
	const usersOutput = new UsersInMemory()

	beforeEach(() => {
		usersOutput.setUsers([])
	})

	describe("when the user wants to get the current user", () => {
		it("should get user without error", async () => {
			const id = uuidv4()
			const created_at = new Date()

			const users: User[] = await addUser({
				usersOutput,
				id,
				username: "John Luke",
				created_at,
			})

			const user: User | null = await getUser({
				usersOutput,
			})

			expect(user).toEqual(users[0])
		})

		it("shouldn't get them and should throw error", async () => {
			usersOutput.setUser(undefined)

			await expect(
				getUser({
					usersOutput,
				})
			).rejects.toThrowError()
		})
	})

	describe("when the user wants to add a user", () => {
		it("should add it to his empty users", async () => {
			const id = uuidv4()
			const created_at = new Date()
			const users: User[] = await addUser({
				usersOutput,
				id,
				username: "John Luke",
				created_at,
			})

			const expectedUsers: User[] = [
				{
					id,
					username: "John Luke",
					created_at,
				},
			]

			expect(users).toEqual(expectedUsers)
		})

		it("should add it to his existing users", async () => {
			usersOutput.setUsers(usersInfrastructureFakes)

			const id = uuidv4()
			const created_at = new Date()

			const users: User[] = await addUser({
				usersOutput,
				id,
				username: "John Luke",
				created_at,
			})

			const expectedUsers: User[] = [
				...usersOutput.mapToDomainModel(usersInfrastructureFakes),
				{
					id,
					username: "John Luke",
					created_at,
				},
			]

			expect(users).toEqual(expectedUsers)
		})

		it("shouldn't add it and should throw error", async () => {
			usersOutput.setUsers(undefined)
			const id = uuidv4()

			await expect(
				addUser({
					usersOutput,
					id,
					username: "John Luke",
					created_at: new Date(),
				})
			).rejects.toThrowError()
		})
	})
})
