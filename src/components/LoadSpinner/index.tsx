import React from "react"
import { ThreeDots } from "react-loader-spinner"

interface LoadSpinnerPros {
	loading: boolean
}

const LoadSpinner = ({ loading }: LoadSpinnerPros) => {
	return loading ? (
		<div className="w-full h-full">
			<ThreeDots color="#2c4eac" height="100" width="100" />
		</div>
	) : null
}

export default LoadSpinner
