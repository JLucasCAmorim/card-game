import { ReactNode } from "react"
import { CardProvider } from "./CardContext"
import { ToastProvider } from "./ToastContext"
import { UserProvider } from "./UserContext"

const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<ToastProvider>
			<UserProvider>
				<CardProvider>{children}</CardProvider>
			</UserProvider>
		</ToastProvider>
	)
}

export default Providers
