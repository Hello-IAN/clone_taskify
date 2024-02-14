import { getAllTitle } from "@/actions/boardServerAction";

import { Board } from "./board";

export const OrganizationBoardItem = async ()=> {
	const boardTitles = await getAllTitle()
	return (
		<div className="space-y-2">
			{boardTitles.map((board) => (
				<Board 
					key={board.id} 
					title={board.title} 
					id={board.id} 
				/>
			))}
		</div>
	)
}