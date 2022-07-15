import Image from "next/image"
import { CardTitle, Description, Salam, Title, WrapperImage } from "./SectionHomeStyled"

const SectionHome = () => {
	return (
		<>
			<CardTitle>
				<Salam>Assalamu&apos;alaikum</Salam>
				<Title>Qur&apos;an App</Title>
				<Description>Al-Quran Indonesia dengan terjemahan, tafsir (Kemenag, Quraish Shihab, Al-Jalalain) dan audio murottal</Description>
				<WrapperImage>
					<Image src="/src/images/quran.webp" layout="fixed" width={140} height={120} alt="quran-icon" />
				</WrapperImage>
			</CardTitle>
		</>
	)
}

export default SectionHome
