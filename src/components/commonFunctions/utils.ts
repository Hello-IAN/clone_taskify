export const getSpecificUrlPath = (url:string, id:string, suffix:string) => {
	return `${url}/${id}/${suffix.toLowerCase()}`
}

