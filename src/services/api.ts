import axios from "axios";
const apiUrl: string = "https://fakestoreapi.com/";
export const get = async (url: string = "", queryParams?: string) => {
	try {
		const response = await axios.get(apiUrl + url);
		return response?.data;
		// await fetch(apiUrl + url)
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		console.log("data", data);
		// 		return data;
		// 	});
	} catch (error) {
		throw error;
	}
};
