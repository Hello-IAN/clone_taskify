import { Skeleton } from "@/components/ui/skeleton"

export const InfoSkeleton = () => {
	return (
		<div className="flex items-center gap-x-4">
			<div className="w-[60px] h-[60px] relative">
				<Skeleton className="w-full h-full absolute"/>
			</div>
			<div className="space-y-2">
				<Skeleton className="h-10 w-[200px]"/>
				<div className="flex items-center">
					<Skeleton className="h-4 w-4 mr-2"/>
					<Skeleton className="h-4 w-[100px]"/>
				</div>
			</div>
		</div>
	)
}