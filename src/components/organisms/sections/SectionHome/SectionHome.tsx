import { DividerStyle } from "../../../atoms/Divider/DividerStyled"
import CardTitle from "../../../molecules/CardTitle/CardTitle"
import SurahItem from "../../../molecules/SurahItem/SurahItem"
import { ListSurah } from "./SectionHomeStyled"

const SectionHome = () => {
	return (
		<>
			<CardTitle />
			<ListSurah>
				<SurahItem />
				<DividerStyle />
			</ListSurah>
		</>
	)
}

export default SectionHome
