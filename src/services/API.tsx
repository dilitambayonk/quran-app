import axios from "axios"

const URL = "https://quran-api-id.vercel.app"

const getListSurah = async () => {
	try {
		return await axios.get(URL + "/surahs")
	} catch (error: any) {
		console.error(error.message)
	}
}

export const serviceAPI = {
	getListSurah,
}
