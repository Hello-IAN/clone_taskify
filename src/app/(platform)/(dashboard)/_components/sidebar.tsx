"use client"

import { Skeleton } from "@/components/ui/skeleton";
import { sideBarActions, SidebarProps } from "../_interface/ISideBar";

export const DashboardSidebar = ({
	storageKey = "t-sidebar-state"
}: SidebarProps) => {
	const {
		expanded,
		setExpanded,
		activeOrganization,
		userMemberships,
		defaultAccordionValue,
		onExpand,
		loadingState 
	} = sideBarActions()
	
	//loading short cut
	if (loadingState)
	return (
		<>
			<Skeleton />
		</>
	)

	return (
		<div>
			SideBar테스트
		</div>
	)

}