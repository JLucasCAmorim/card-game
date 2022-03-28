import { ReactElement, useEffect } from "react"
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from "react-icons/fi"
import { ToastMessage } from "../../../contexts/ToastContext"
import { useToast } from "../../../hooks/useToast"
import styles from "./toast.module.css"

interface ToastProps {
	message: ToastMessage
	style: Record<string, unknown>
}

type Icons = {
	info: ReactElement
	success: ReactElement
	error: ReactElement
}

const icons: Icons = {
	info: <FiInfo size={24} />,
	success: <FiCheckCircle size={24} />,
	error: <FiAlertCircle size={24} />,
}

const Toast: React.FC<ToastProps> = ({ message, style }) => {
	const { removeToast } = useToast()

	useEffect(() => {
		const timer = setTimeout(() => {
			removeToast(message.id)
		}, 3000)

		return () => {
			clearTimeout(timer)
		}
	}, [removeToast, message.id])

	return (
		<div className={styles.notificationWrapper} style={style}>
			<div className={styles.iconWrapper}>
				{icons[message.type || "info"]}
			</div>
			<div className={styles.contentWrapper}>
				<h1>{message.title}</h1>
				<p>{message.description && <p>{message.description}</p>}</p>
			</div>
			<button
				className={styles.closeIcon}
				onClick={() => removeToast(message.id)}
			>
				<FiXCircle />
			</button>
		</div>
	)
}

export default Toast
