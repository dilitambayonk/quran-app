import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { serviceAPI } from "../../../../services/API"
import Divider from "../../../atoms/Divider/Divider"
import ErrorMessage from "../../../atoms/ErrorMessage/ErrorMessage"
import Loader from "../../../atoms/Loader/Loader"
import AyahItem from "../../../molecules/AyahItem/AyahItem"
import CardSurah from "../../../molecules/CardSurah/CardSurah"
import { ListAyah } from "./SectionSurahStyled"

const SectionSurah = () => {
	const router = useRouter()
	const surahNum: any = router.query?.num

	const [surah, setSurah] = useState<any>({})
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		getSurah()
	}, [])

	const getSurah = async () => {
		setLoading(true)

		const res: any = await serviceAPI.getSurahDetail(surahNum)
		if (res) {
			setSurah(res.data)
		} else {
			setError(true)
		}

		setLoading(false)
	}

	console.log(surah)

	return (
		<>
			{!loading && !error && (
				<>
					<CardSurah surahName={surah.name} surahTranslation={surah.translation} surahRevelation={surah.revelation} totalAyah={surah.numberOfAyahs} bismillah={surah.bismillah?.arab} />
					<ListAyah>
						{surah.ayahs?.map((ayah: any) => (
							<div key={ayah.number.inSurah}>
								<AyahItem ayahNumber={ayah.number.inSurah} ayahArabic={ayah.arab} ayahTranclation={ayah.translation} />
								<Divider />
							</div>
						))}
					</ListAyah>
				</>
			)}
			{loading && <Loader />}
			{error && <ErrorMessage />}
		</>
	)
}

export default SectionSurah
