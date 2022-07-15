import styled from "styled-components"

export const SurahWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`

export const SurahNumber = styled.div`
	position: relative;
	display: flex;
`
export const Number = styled.span`
	position: absolute;
	font-weight: 600;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

export const SurahName = styled.div`
	flex-grow: 1;
	padding-left: 1rem;
`

export const Name = styled.div`
	font-size: 1.2em;
`

export const Description = styled.div`
	color: #a6a9bc;
	font-size: 0.8em;
`

export const Arrow = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	width: 40px;
	height: 40px;
	border: 1px solid #bf7cfc;
	border-radius: 50%;
`
