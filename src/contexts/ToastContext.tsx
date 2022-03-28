import { useCallback, ReactNode, useState } from "react"
import { v4 as uuid } from "uuid"
import { createContext } from "use-context-selector"
import ToastContainer from "../components/Toast"

export interface ToastMessage {
	id: string
	type?: "info" | "success" | "error"
	title: string
	description?: string
}

export interface ToastContextProps {
	addToast(messages: Omit<ToastMessage, "id">): void
	removeToast(id: string): void
}

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps)

export default ToastContext

export const ToastProvider = ({ children }: { children: ReactNode }) => {
	const [messages, setMessages] = useState<ToastMessage[]>([])

	const addToast = useCallback(
		({ type, title, description }: Omit<ToastMessage, "id">) => {
			const id = uuid()

			const toast = {
				id,
				type,
				title,
				description,
			}

			setMessages((state) => [...state, toast])
		},
		[]
	)

	const removeToast = useCallback((id: string) => {
		setMessages((state) => state.filter((message) => message.id !== id))
	}, [])

	return (
		<ToastContext.Provider value={{ addToast, removeToast }}>
			{children}
			<ToastContainer messages={messages} />
		</ToastContext.Provider>
	)
}
