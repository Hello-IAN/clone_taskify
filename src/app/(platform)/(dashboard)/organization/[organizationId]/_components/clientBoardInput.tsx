import { useFormStatus } from "react-dom";
import { IOrganizationBoardInputProps } from "../../../_interface/IDashboard";
import { Input } from "@/components/ui/input";

export const ClientBoardInput = ({errors}:IOrganizationBoardInputProps) => {
	const { pending } = useFormStatus();

	return (
		<div>
			<Input 
				id="title"
				name="title"
				required
				placeholder="제목을 입력해주세요"
				disabled={pending}
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