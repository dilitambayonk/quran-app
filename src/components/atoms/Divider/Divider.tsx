import { DividerStyle } from "./DividerStyled"

interface DividerInterface {
	maxWitdh?: string
}

const Divider = (props: DividerInterface) => {
	return <DividerStyle maxWitdh={props.maxWitdh} />
}

export default Divider
