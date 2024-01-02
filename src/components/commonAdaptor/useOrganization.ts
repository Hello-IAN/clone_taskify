import { useOrganization, useOrganizationList } from "@clerk/nextjs"

export const useCommonUseOrganization = () => {
	return ({
		useOrganization,
		useOrganizationList
	})
}