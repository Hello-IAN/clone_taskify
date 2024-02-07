"use client"

import Link from "next/link";
import { Plus } from "lucide-react";


import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useGetSidebarActions } from "../_hooks/useGetSidebarActions";
import { ISidebarProps } from "../_interface/IDashboard";
import { NavItem } from "./nav-item";
import { SideBarSkeleton } from "./sidebar-skeleton";

export const DashboardSidebar = ({
	storageKey = "t-sidebar-state"
}: ISidebarProps) => {
	const {
		expanded,
		setExpanded,
		activeOrganization,
		userMemberships,
		defaultAccordionValue,
		onExpand,
		loadingState 
	} = useGetSidebarActions(storageKey)
	
	//loading short cut
	if (loadingState)
	return (
		<>
			<SideBarSkeleton />
		</>
	)

	return (
		<>
			<div className="font-medium text-xs flex items-center mb-1">
				<span className="pl-4">
					Workspaces
				</span>
				<Button
					asChild
					type="button"
					size="icon"
					variant="ghost"
					className="ml-auto"
				>
					<Link href="/select-org">
						<Plus className="h-4 w-4" />
					</Link>
				</Button>
			</div>
			<Accordion
				type="multiple"
				defaultValue={defaultAccordionValue}
				className="space-y-2"
			>
				{userMemberships.data?.map(({ organization }) => (
					<NavItem
						key={organization.id}
						isActive={activeOrganization?.id == organization.id}
						isExpanded={expanded[organization.id]}
						organization={organization}
						onExpand={onExpand}
					/>
				))}
			</Accordion>
		</>
	)

}