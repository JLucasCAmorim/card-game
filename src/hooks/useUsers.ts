import UserContext, { UserContextProps } from "@/contexts/UserContext"
import { useContextSelector } from "use-context-selector"

export const useUsers = (): UserContextProps => {
	const user = useContextSelector(UserContext, (context) => context.user)

	const users = useContextSelector(UserContext, (context) => context.users)

	const loading = useContextSelector(
		UserContext,
		(context) => context.loading
	)

	const createUser = useContextSelector(
		UserContext,
		(context) => context.createUser
	)

	const loadUser = useContextSelector(
		UserContext,
		(context) => context.loadUser
	)

	return {
		user,
		users,
		loading,
		createUser,
		loadUser,
	}
}
