import styled from "styled-components"

export const Card = styled.div`
	position: relative;
	padding: 1rem;
	color: white;
	background: rgb(104, 44, 187);
	background: linear-gradient(0deg, rgba(104, 44, 187, 1) 20%, rgba(140, 89, 208, 1) 100%);
	border-radius: 10px;
`

export const Salam = styled.div`
	font-size: 0.8em;
	font-weight: 500;
`

export const Title = styled.div`
	margin-top: 1rem;
	margin-bottom: 0.5rem;
	font-size: 1.8em;
	font-weight: 700;
`

export const Description = styled.div`
	font-size: 0.6em;
	max-width: 60%;
`

export const WrapperImage = styled.span`
	position: absolute;
	right: 0;
	bottom: 0;
`
