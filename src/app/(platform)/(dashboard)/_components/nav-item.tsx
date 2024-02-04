import Image from "next/image"

import { AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

import { INavItemProps } from "../_interface/IDashboard"
import { getOrganizationRoutes } from "../_utils/getOrganizationRoutes"
import { NavItemAccordionContents } from "./nav-item-accordionContent"

export const NavItem = ({
	isExpanded,
	isActive,
	organization,
	onExpand
}:INavItemProps) => {
	const routes = getOrganizationRoutes([
		"Layout", 
		"Activity", 
		"Settings", 
		"Billing"], 
		organization.id
	);
	
	return (
		<AccordionItem
			value={organization.id}
			className="border-none"
		>
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
			<NavItemAccordionContents routes={routes} />
		</AccordionItem>
	)
}