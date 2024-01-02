import { useCommonLocalStorage } from "@/components/commonAdaptor/useLocalStorage"
import { useCommonUseOrganization } from "@/components/commonAdaptor/useOrganization"

export type SidebarProps = {
	storageKey?: string;
}

export const sidebarMethod = ()=> {
	return ( {
		useLocalStorage:useCommonLocalStorage(),
		useOrganization: useCommonUseOrganization().useOrganization,
		useOrganizationList: useCommonUseOrganization().useOrganizationList,
	} )
}

export const sideBarActions = ()=> {
	const storageKey = "t-sidebar-state";
	const { useLocalStorage, useOrganization, useOrganizationList } = sidebarMethod()
	const [ expanded, setExpanded ] = useLocalStorage<Record<string, any>>(
		storageKey,
		{}
	)
	const {
		organization: activeOrganization, 
		isLoaded:isOrgLoaded,
	} = useOrganization()

	const {
		userMemberships,
		isLoaded: isOrgListLoaded
	} = useOrganizationList({
		userMemberships: {
			infinite: true,
		},
	})
	const loadingState = (!isOrgLoaded ? true :
			!isOrgListLoaded ? true :
			userMemberships.isLoading ? true : 
			false)
	const defaultAccordionValue: string[] = Object.keys(expanded).reduce((acc: string[], key:string) => {
		if (expanded[key]) {
			acc.push(key);
		}
		return acc;
	}, [])

	const onExpand = (id:string) => {
		setExpanded((curr)=> ({
			...curr,
			[id]: !expanded[id],
		}))
	}
	return ({
		expanded,
		setExpanded,
		activeOrganization,
		userMemberships,
		defaultAccordionValue,
		onExpand,
		loadingState
	})
}