"use client";

import { useFormState } from "react-dom";

import { createBoard } from "@/actions/create-board"

import { ClientBoardInput } from "./clientBoardInput";
import { ClientBoardButton } from "./clientBoardButton";

export const ClientBoardFormView = () => {
	const initialState = { message:"", errors:{}};
	const [state, dispatch] = useFormState(createBoard, initialState);
	return (
		<form action={dispatch}>
			<div className="flex flex-col space-y-2">
				<ClientBoardInput errors={state.errors} />
			</div>
			<ClientBoardButton />
		</form>
	)
}