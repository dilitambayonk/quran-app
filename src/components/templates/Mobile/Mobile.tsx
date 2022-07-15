import { ReactNode } from "react"
import { Container } from "./MobileStyled"

interface MobileTemplateInterface {
	children: ReactNode
}

const MobileTemplate = (props: MobileTemplateInterface) => {
	return <Container>{props.children}</Container>
}

export default MobileTemplate
