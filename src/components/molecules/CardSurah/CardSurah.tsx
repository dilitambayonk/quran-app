import Divider from "../../atoms/Divider/Divider"
import { Bismillah, Card, Description, SurahTitle, SurahTranslation } from "./CardSurahStyled"

interface CardSurahInterface {
	surahName: string
	surahTranslation: string
	surahRevelation: string
	totalAyah: number
	bismillah: string
}

const CardSurah = (props: CardSurahInterface) => {
	const { surahName, surahTranslation, surahRevelation, totalAyah, bismillah } = props
	return (
		<Card>
			<SurahTitle>{surahName}</SurahTitle>
			<SurahTranslation>{surahTranslation}</SurahTranslation>
			<Divider maxWitdh="10rem" />
			<Description>{`${surahRevelation} - ${totalAyah} Ayat`}</Description>
			<Bismillah>{bismillah}</Bismillah>
		</Card>
	)
}

export default CardSurah
