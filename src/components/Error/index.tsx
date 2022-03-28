interface Props {
	error: string
}

export const Error = ({ error }: Props) =>
	error ? <div className="m-2.5 text-red-400">{error}</div> : <></>
