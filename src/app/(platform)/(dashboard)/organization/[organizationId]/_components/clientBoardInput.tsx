import { IOrganizationBoardInputProps } from "../../../_interface/IDashboard";

export const ClientBoardInput = ({errors}:IOrganizationBoardInputProps) => {
	return (
		<div>
			<input 
				id="title"
				name="title"
				required
				placeholder="제목을 입력해주세요"
				className="border-black border p-1" 
			/>
			{ errors?.title ? (
				<div>
					{errors?.title.map((error: string)=>(
						<p key={error} className="text-rose-500">
							{error}
						</p>
					))}
				</div>
			): null }
		</div>
	)
}