import { OrganizationResource } from '@clerk/types/dist/'

export interface ISidebarProps {
  storageKey?: string;
}

export interface INavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: OrganizationResource;
  onExpand: (id: string) => void;
}

export interface INavItemRoute {
	label:string,
	icon:JSX.Element,
	href:string
}

export interface INavItemAccordionContentsProps {
  routes:INavItemRoute[]
}
