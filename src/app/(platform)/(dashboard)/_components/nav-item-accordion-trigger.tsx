import { AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { INavItemProps } from "../_interface/IDashboard"

export const NavItemAccordionTrigger = ({
	isActive,
	isExpanded,
	onExpand,
	organization
}:INavItemProps) => {
	return (
		<AccordionTrigger
		onClick={() => onExpand(organization.id)}
		className={cn(
			"flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500 transition text-start no-underline hover:no-underline",
			isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
		)}
		>
			<div className="flex items-center gap-x-2">
				<div className="w-7 h-7 relative">
					<Image
						fill
						src={organization.imageUrl}
						alt="Organization"
						className="rounded-sm object-cover"
					/>
				</div>
				<span className="font-medium text-sm">
					{organization.name}
				</span>
			</div>
		</AccordionTrigger>
	)
}