"use client"

import Link from "next/link";
import { Plus } from "lucide-react";


import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
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
					<p key={organization.id}>
						{organization.id}
					</p>
				))}
			</Accordion>
		</>
	)

}