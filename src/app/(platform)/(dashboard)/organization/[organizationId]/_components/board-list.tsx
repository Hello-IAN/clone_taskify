import { HelpCircle, User2 } from "lucide-react";

import { Hint } from "@/components/hint";

export const Boardlist = () => {
	return (
		<div className="space-y-4">
			<div className="flex items-center font-semibold text-lg">
				<User2 className="h-6 w-6 mr-2"/>
				Your boards
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
				<div
					role="button"
					className="aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
				>
					<p className="text-sm">
						Creater New Board
					</p>
					<span className="text-xs">
						5개 남았습니다.
					</span>
					<Hint
						sideOffset={40}
						description={
							`무료 작업실은 5개의 보드까지 만들 수 있습니다. 무제한 사용을 원하시면 작업실의 등급을 올려주세요!`
						}
					>
						<HelpCircle 
							className="absolute bottom-2 right-2 h-[14px] w-[14px]"
						/>
					</Hint>
				</div>
			</div>
		</div>
	)
}