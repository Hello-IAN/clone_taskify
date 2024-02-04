import { Activity, CreditCard, Layout, Settings } from "lucide-react";

import { getSpecificUrlPath } from "@/components/commonFunctions/utils";
import { INavItemRoute } from "../_interface/IDashboard";

const getIcon = (label:string) => {
	switch(label) {
		case 'Activity':
			return <Activity className="h-4 w-4 mr-2" />
		case 'Billing':
			return <CreditCard className="h-4 w-4 mr-2" />
		case 'Layout':
			return <Layout className="h-4 w-4 mr-2" />
		case 'Settings':
			return <Settings className="h-4 w-4 mr-2" />
		default:
			return <></>
	}
}

export const getOrganizationRoutes = (labels:string[], id:string)=> {
	return (labels.map((label) => {
		return {
			label: label,
			icon: getIcon(label),
			href: getSpecificUrlPath("/organization", id, label)
		} as INavItemRoute
	}))
}