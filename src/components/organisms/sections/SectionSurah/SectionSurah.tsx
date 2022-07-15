import { useRouter } from "next/router"

const SectionSurah = () => {
	const router = useRouter()
	const surahNum = router.query?.num

	return <div>SectionSurah {surahNum}</div>
}

export default SectionSurah
