export const getSpecificUrlPath = (url:string, id:string, suffix:string) => {
	return suffix !== "Board" ? `${url}/${id}/${suffix.toLowerCase()}` : `${url}/${id}` 
}

export const onSubmitToSingleTarget = (
	formData: FormData, 
	target:string,
	action:(input:{title:string}) => Promise<void>
	) => {
		const title = formData.get(target) as string;
		
		action({ title })
	}