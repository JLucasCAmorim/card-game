import { AddUserDto, User } from "@/modules/users/dtos/user.dto"

export interface UsersOutput {
	getUser(): Promise<User | null>
	addUser(data: AddUserDto): Promise<User[]>
}
