import { UsersLocalStorage } from "@/modules/users/infra/users.local-storage"

export const outputs = {
	usersOutput: new UsersLocalStorage(),
}
