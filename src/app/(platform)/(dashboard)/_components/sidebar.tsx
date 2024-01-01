"use client";

/* useLocalStorage는 추후에 jotai로 변경하거나, 직접 hook으로 만들어서
사용하도록 교체해야할 것 같다. */

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";

import { SidebarProps } from "../_interface/interface";
import { SidebarAdaptor } from "../_adaptor/sidebarAdaptor";


export const DashboardSidebar = ({ storageKey = "t-sidebar-state",
} : SidebarProps
) => {
  const {
    ALocalStorage, 
    AOrganization, 
    AOrganizationList, 
    getAccodionDefValue,
    onExpand
  } = SidebarAdaptor();

  const [expanded, setExpanded] = ALocalStorage<Record<string, any>>(
    storageKey, 
    {}
  );

  const {
    organization: activeOrganization,
    isLoaded:isOrgLoaded
  } = AOrganization();

  const {
    userMemberships,
    isLoaded:isOrgListLoaded,
  } = AOrganizationList({
    userMemberships: {
      infinite:true,
    }
  });

  if (!isOrgLoaded || !isOrgListLoaded || userMemberships.isLoading) {
    return (
      <>
        <Skeleton />
      </>
    )
  }
  return (
    <div>
      {activeOrganization}
    </div>
  )
}