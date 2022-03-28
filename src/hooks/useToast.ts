import ToastContext, { ToastContextProps } from "@/contexts/ToastContext"
import { useContextSelector } from "use-context-selector"

export const useToast = (): ToastContextProps => {
	const addToast = useContextSelector(
		ToastContext,
		(context) => context.addToast
	)

	const removeToast = useContextSelector(
		ToastContext,
		(context) => context.removeToast
	)

	return {
		addToast,
		removeToast,
	}
}
