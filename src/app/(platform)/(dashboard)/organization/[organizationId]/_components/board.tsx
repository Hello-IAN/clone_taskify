import { Button } from "@/components/ui/button";

import { IOrganizationBoardProps } from "../../../_interface/IDashboard";
import { deleteBoard } from "@/actions/boardServerAction";

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
			<Button type="submit" variant="destructive" size="sm">
				Delete
			</Button>
		</form>
	)
}