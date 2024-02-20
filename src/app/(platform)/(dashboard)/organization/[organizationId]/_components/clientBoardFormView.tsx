"use client";

import { createBoard } from "@/actions/boardAction";
import { useAction } from "@/hooks/ues-action";
import { onSubmitToSingleTarget } from "@/components/commonFunctions/utils";
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";

export const ClientBoardFormView = () => {
	const { execute, fieldErrors} = useAction(createBoard, {
		onSucess: (data) => {
			console.log(data, "Pushing Data Success!");
		},
		onError: (error) => {
			console.error(error);
		}
	});
	
	const onSubmit = (formData:FormData) => onSubmitToSingleTarget(formData, "title", execute);

	return (
		<form action={onSubmit}>
			<div className="flex flex-col space-y-2">
				<FormInput
					label="Board title"
					id="title"
					errors={fieldErrors} 
				/>
			</div>
			<FormSubmit>
				Save
			</FormSubmit>
		</form>
	)
}