import { useRouter } from "next/router"
import AyahItem from "../../../molecules/AyahItem/AyahItem"
import CardSurah from "../../../molecules/CardSurah/CardSurah"
import { ListAyah } from "./SectionSurahStyled"

const SectionSurah = () => {
	const router = useRouter()
	const surahNum = router.query?.num

	return (
		<>
			<CardSurah surahName="Al-Fatihah" surahTranslation="Pembukaan" surahRevelation="Makiyah" totalAyah={7} bismillah="بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ" />
			<ListAyah>
				<AyahItem ayahNumber={1} ayahArabic="بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ" ayahTranclation="Dengan nama Allah Yang Maha Pengasih, Maha Penyayang." />
			</ListAyah>
		</>
	)
}

export default SectionSurah
