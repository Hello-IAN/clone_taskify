import { Button } from "@/components/ui/button";

import { IOrganizationBoardProps } from "../../../_interface/IDashboard";

export const Board = ({
	title,
	id
}: IOrganizationBoardProps) => {
	return (
		<form className="flex items-center gap-x-2">
			<p>
				{title}
			</p>
			<Button type="submit" variant="destructive" size="sm">
				Delete
			</Button>
		</form>
	)
}