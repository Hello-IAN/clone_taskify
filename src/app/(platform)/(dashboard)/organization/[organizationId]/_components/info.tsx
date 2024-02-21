"use client"

import { useCommonClerkOrganizatios } from "@/components/commonAdaptor/useOrganization";
import { InfoView } from "./info-view";
import { InfoSkeleton } from "./info-skeleton";

export const Info = () => {
	const { organization, isLoaded } = useCommonClerkOrganizatios().useOrganization();

	if (!isLoaded) {
		return (
			<InfoSkeleton />
		)
	}
	
	return (
		<InfoView organization={organization!} />

	)
}