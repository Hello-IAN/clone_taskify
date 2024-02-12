import { IOrganizationBoardProps } from "../../../_interface/IDashboard";

export const Board = ({
	title,
	id
}: IOrganizationBoardProps) => {
	return (
		<div>
			{title}
		</div>
	)
}