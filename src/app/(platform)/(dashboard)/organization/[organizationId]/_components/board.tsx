import { deleteBoard } from "@/actions/boardServerAction";

import { IOrganizationBoardProps } from "../../../_interface/IDashboard";
import { BoardDeleteButton } from "./boardButton";

export const Board = ({
	title,
	id
}: IOrganizationBoardProps) => {

	const deleteBoardWithId = deleteBoard.bind(null, id);

	return (
		<form action={deleteBoardWithId} className="flex items-center gap-x-2">
			<p>
				{title}
			</p>
			<BoardDeleteButton />
		</form>
	)
}