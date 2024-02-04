import { AccordionItem } from "@/components/ui/accordion"


import { INavItemProps } from "../_interface/IDashboard"
import { getOrganizationRoutes } from "../_utils/getOrganizationRoutes"
import { NavItemAccordionContents } from "./nav-item-accordionContent"
import { NavItemAccordionTrigger } from "./nav-item-accordion-trigger"

export const NavItem = ({
	isActive,
	isExpanded,
	onExpand,
	organization
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
			<NavItemAccordionTrigger
				isActive={isActive}
				isExpanded={isExpanded}
				onExpand={onExpand}
				organization={organization}
			/>
			<NavItemAccordionContents routes={routes} />
		</AccordionItem>
	)
}