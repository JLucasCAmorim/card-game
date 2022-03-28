import { useTransition } from "@react-spring/web"
import { ToastMessage } from "../../contexts/ToastContext"

import Toast from "./components"

interface ToastContainerProps {
	messages: ToastMessage[]
}

const ToastContainer = ({ messages }: ToastContainerProps) => {
	const messagesWithTransitions = useTransition(messages, {
		from: { right: "-120%", opacity: 0 },
		enter: { right: "0%", opacity: 1 },
		leave: { right: "-120%", opacity: 1 },
	})

	return (
		<div className="absolute right-0 top-0 p-8 overflow-hidden">
			{messagesWithTransitions((props, item) => (
				<Toast key={item.id} style={props} message={item} />
			))}
		</div>
	)
}

export default ToastContainer
