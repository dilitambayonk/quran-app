import { GrPlay } from "react-icons/gr"
import { AyahArabic, AyahHeader, AyahNumber, AyahTranslation, AyahWrapper } from "./AyahItemStyled"

interface AyahItemInterface {
	ayahNumber: number
	ayahArabic: string
	ayahTranclation: string
}

const AyahItem = (props: AyahItemInterface) => {
	const { ayahNumber, ayahArabic, ayahTranclation } = props
	return (
		<AyahWrapper>
			<AyahHeader>
				<AyahNumber>{ayahNumber}</AyahNumber>
				<GrPlay />
			</AyahHeader>
			<AyahArabic>{ayahArabic}</AyahArabic>
			<AyahTranslation>{ayahTranclation}</AyahTranslation>
		</AyahWrapper>
	)
}

export default AyahItem
