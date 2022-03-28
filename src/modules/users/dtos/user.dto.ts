export interface User {
	id: string
	username: string
	created_at: Date
}

export interface AddUserDto {
	readonly id: string
	readonly username: string
	readonly created_at: Date
}
