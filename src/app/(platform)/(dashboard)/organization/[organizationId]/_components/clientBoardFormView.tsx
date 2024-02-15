"use client";
import { createBoard } from "@/actions/boardAction";
import { useAction } from "@/hooks/ues-action";
import { onSubmitToSingleTarget } from "@/components/commonFunctions/utils";

import { ClientBoardInput } from "./clientBoardInput";
import { ClientBoardButton } from "./clientBoardButton";

export const ClientBoardFormView = () => {
	const { execute, fieldErrors} = useAction(createBoard);
	
	const onSubmit = (formData:FormData) => onSubmitToSingleTarget(formData, "title", execute);

	return (
		<form action={onSubmit}>
			<div className="flex flex-col space-y-2">
				<ClientBoardInput errors={fieldErrors} />
			</div>
			<ClientBoardButton />
		</form>
	)
}