import { Arrow, Description, Name, Number, SurahName, SurahNumber, SurahWrapper } from "./SurahItemStyled"
import { IoIosArrowForward } from "react-icons/io"
import { TbJewishStar } from "react-icons/tb"

const SurahItem = () => {
	return (
		<SurahWrapper>
			<SurahNumber>
				<TbJewishStar size="3em" color="#BF7CFC" />
				<Number>1</Number>
			</SurahNumber>
			<SurahName>
				<Name>Al-Fatihah</Name>
				<Description>Pembukaan - Makiyah</Description>
			</SurahName>
			<Arrow>
				<IoIosArrowForward />
			</Arrow>
		</SurahWrapper>
	)
}

export default SurahItem
