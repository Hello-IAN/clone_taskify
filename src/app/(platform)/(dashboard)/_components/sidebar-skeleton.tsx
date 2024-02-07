import { Skeleton } from "@/components/ui/skeleton"

export const SideBarSkeleton = () => {
	return (
		<>
			{/** Header part skeleton */}
			<div className="flex items-center justify-between mb-2">
				<Skeleton className="h-10 w-[50%]"/>
				<Skeleton className="h-10 w-10"/>
			</div>
			{/** Body part, if need nEA skeletons more, copy & paste this */}
			<div className="mt-2">
				<div className="flex items-center gap-x-2">
					<div className="w-10 h-10 relative shirink-0">
						<Skeleton className="h-full w-full absolute" />
					</div>
					<Skeleton className="h-10 w-full" />
				</div>
			</div>
			<div className="mt-2">
				<div className="flex items-center gap-x-2">
					<div className="w-10 h-10 relative shirink-0">
						<Skeleton className="h-full w-full absolute" />
					</div>
					<Skeleton className="h-10 w-full" />
				</div>
			</div>
		</>
	)
}