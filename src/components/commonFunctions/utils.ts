export const getSpecificUrlPath = (url:string, id:string, suffix:string) => {
	return suffix !== "Board" ? `${url}/${id}/${suffix.toLowerCase()}` : `${url}/${id}` 
}

