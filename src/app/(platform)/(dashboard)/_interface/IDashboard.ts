import { OrganizationResource } from '@clerk/types/dist/'

export interface ISidebarProps {
  storageKey?: string;
}

export interface INavItemProps {
  isActive: boolean;
  isExpanded: boolean;
  onExpand: (id: string) => void;
  organization: OrganizationResource;
}

export interface INavItemRoute {
	label:string,
	icon:JSX.Element,
	href:string
}

export interface INavItemAccordionContentsProps {
  routes:INavItemRoute[]
}

export interface IOgarnizationInfoProps {
  organization: OrganizationResource
}