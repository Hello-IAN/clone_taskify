"use client";

import { createBoard } from "@/actions/create-board"
import { Button } from "@/components/ui/button"
import { useFormState } from "react-dom";
import { ClientBoardInput } from "./clientBoardInput";

export const ClientBoardFormView = () => {
	const initialState = { message:"", errors:{}};
	const [state, dispatch] = useFormState(createBoard, initialState);
	return (
		<form action={dispatch}>
			<div className="flex flex-col space-y-2">
				<ClientBoardInput errors={state.errors} />
			</div>
			<Button type="submit">
				Submit
			</Button>
		</form>
	)
}