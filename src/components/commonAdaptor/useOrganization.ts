import { useOrganization, useOrganizationList } from "@clerk/nextjs"

export const useCommonClerkOrganizatios = () => {
	return ({
		useOrganization,
		useOrganizationList
	})
}