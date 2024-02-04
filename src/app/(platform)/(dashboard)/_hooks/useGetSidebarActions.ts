import { useCommonLocalStorage } from "@/components/commonAdaptor/useLocalStorage"
import { useCommonClerkOrganizatios } from "@/components/commonAdaptor/useOrganization"

export const useGetSidebarActions = (storageKey:string)=> {
	const useLocalStorage = useCommonLocalStorage()
	const { useOrganization, useOrganizationList } = useCommonClerkOrganizatios();

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