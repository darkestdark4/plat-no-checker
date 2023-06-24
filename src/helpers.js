import { wilayah } from "./data/wilayah.js"

export const checkWilayah = (val) => {
	let result = wilayah.find(item => {
		return item.code == val
	})
	
	if(result === undefined) return null
	return result
}