"use client";

import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";
import { useEffect } from "react";

/* url로 접근했을때, 접근한 orgId로 switcher 업데이트 */ 
export const OrgControlloer = () => {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(()=> {
    if (!setActive) return ;
    setActive({
      organization: params?.organizationId as string
    })
  }, [setActive, params?.organizationId])
  return null
}