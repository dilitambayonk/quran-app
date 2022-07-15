import styled from "styled-components"

interface DividerInterface {
	maxWitdh?: string
}

export const DividerStyle = styled.div<DividerInterface>`
	height: 1px;
	background: #ebeaf2;
	margin: 1rem auto;
	opacity: 0.6;
	max-width: ${(props) => (props.maxWitdh ? props.maxWitdh : "unset")};
`
