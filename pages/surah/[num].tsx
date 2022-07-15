import { NextPage } from "next"
import SectionSurah from "../../src/components/organisms/sections/SectionSurah/SectionSurah"
import MobileTemplate from "../../src/components/templates/Mobile/Mobile"

const SurahDetail: NextPage = () => {
	return (
		<MobileTemplate>
			<SectionSurah />
		</MobileTemplate>
	)
}

export default SurahDetail
