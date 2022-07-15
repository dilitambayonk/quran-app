import { ReactNode } from "react"
import { ErrorWrapper } from "./ErrorMessageStyled"

interface ErrorMessageInterface {
	children?: ReactNode
}

const ErrorMessage = (props: ErrorMessageInterface) => {
	return <ErrorWrapper>{props.children || "Opss.. Terjadi kesalahan!"}</ErrorWrapper>
}

export default ErrorMessage
