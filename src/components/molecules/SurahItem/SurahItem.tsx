import { Arrow, Description, Name, Number, SurahName, SurahNumber, SurahWrapper } from "./SurahItemStyled"
import { IoIosArrowForward } from "react-icons/io"
import { TbJewishStar } from "react-icons/tb"
import { GiRubElHizb } from "react-icons/gi"
import { useRouter } from "next/router"

interface SurahItemInterface {
	surahNum: number
	surahName: string
	surahTranslation: string
	surahRevelation: string
}

const SurahItem = (props: SurahItemInterface) => {
	const { surahNum, surahName, surahRevelation, surahTranslation } = props
	const router = useRouter()

	const handleClick = () => {
		router.push(`/surah/${surahNum}`)
	}

	return (
		<SurahWrapper onClick={handleClick}>
			<SurahNumber>
				<GiRubElHizb size="3em" color="#BF7CFC" />
				<Number>{surahNum}</Number>
			</SurahNumber>
			<SurahName>
				<Name>{surahName}</Name>
				<Description>{`${surahTranslation} - ${surahRevelation}`}</Description>
			</SurahName>
			<Arrow>
				<IoIosArrowForward />
			</Arrow>
		</SurahWrapper>
	)
}

export default SurahItem
