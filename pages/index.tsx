import type { NextPage } from "next"
import SectionHome from "../src/components/organisms/sections/SectionHome/SectionHome"
import MobileTemplate from "../src/components/templates/Mobile/Mobile"

const Home: NextPage = () => {
	return (
		<MobileTemplate>
			<SectionHome />
		</MobileTemplate>
	)
}

export default Home
