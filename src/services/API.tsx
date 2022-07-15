import axios from "axios"

const URL = "https://quran-api-id.vercel.app"

const getListSurah = async () => {
	try {
		return await axios.get(URL + "/surahs")
	} catch (error: any) {
		console.error(error.message)
	}
}

const getSurahDetail = async (numSurah: number) => {
	try {
		return await axios.get(`${URL}/surahs/${numSurah}`)
	} catch (error: any) {
		console.error(error.message)
	}
}

export const serviceAPI = {
	getListSurah,
	getSurahDetail,
}
