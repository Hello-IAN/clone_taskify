"use client";

import { createBoard } from "@/actions/create-board"
import { Button } from "@/components/ui/button"
import { useFormState } from "react-dom";

export const ClientBoardForm = () => {
	const initialState = { message:"", errors:{}};
	const [state, dispatch] = useFormState(createBoard, initialState);
	return (
		<form action={dispatch}>
			<div className="flex flex-col space-y-2">
				<input 
					id="title"
					name="title"
					required
					placeholder="제목을 입력해주세요"
					className="border-black border p-1" 
				/>
				{state?.errors?.title ? (
					<div>
						{state?.errors?.title.map((error: string)=>(
							<p key={error} className="text-rose-500">
								{error}
							</p>
						))}
					</div>
				):null}
			</div>
			<Button type="submit">
				Submit
			</Button>
		</form>
	)
}