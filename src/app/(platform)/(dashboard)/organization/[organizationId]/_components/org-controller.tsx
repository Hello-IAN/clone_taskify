"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

import { useCommonUseOrganization } from "@/components/commonAdaptor/useOrganization";

/* url로 접근했을때, 접근한 orgId로 switcher 업데이트 */ 
export const OrgControlloer = () => {
  const params = useParams();
  const { setActive } = useCommonUseOrganization().useOrganizationList();

  useEffect(()=> {
    if (!setActive) return ;
    setActive({
      organization: params?.organizationId as string
    })
  }, [setActive, params?.organizationId])
  return null
}