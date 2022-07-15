import { useEffect, useState } from "react"
import { serviceAPI } from "../../../../services/API"
import { DividerStyle } from "../../../atoms/Divider/DividerStyled"
import ErrorMessage from "../../../atoms/ErrorMessage/ErrorMessage"
import Loader from "../../../atoms/Loader/Loader"
import CardTitle from "../../../molecules/CardTitle/CardTitle"
import SurahItem from "../../../molecules/SurahItem/SurahItem"
import { ListSurah } from "./SectionHomeStyled"

const SectionHome = () => {
	const [listSurah, setListSurah] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		getListSurah()
	}, [])

	const getListSurah = async () => {
		setLoading(true)

		const res: any = await serviceAPI.getListSurah()
		if (res) {
			setListSurah(res.data)
		} else {
			setError(true)
		}

		setLoading(false)
	}

	return (
		<>
			<CardTitle />
			{!loading && !error && (
				<ListSurah>
					{listSurah.map((surah: any) => (
						<div key={surah.number}>
							<SurahItem surahNum={surah.number} surahName={surah.name} surahTranslation={surah.translation} surahRevelation={surah.revelation} />
							<DividerStyle />
						</div>
					))}
				</ListSurah>
			)}
			{loading && <Loader />}
			{error && <ErrorMessage />}
		</>
	)
}

export default SectionHome
