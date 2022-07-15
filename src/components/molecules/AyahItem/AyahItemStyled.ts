import styled from "styled-components"

export const AyahWrapper = styled.div``

export const AyahHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;
	background: #f8f5fc;
	border-radius: 10px;

	> svg {
		cursor: pointer;
		> polygon {
			stroke: #863ed4;
		}
	}
`

export const AyahNumber = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	width: 2rem;
	height: 2rem;
	color: white;
	background: #863ed4;
	border-radius: 50%;
`

export const AyahArabic = styled.div`
	text-align: end;
	margin: 1rem 0;
`

export const AyahTranslation = styled.div``
