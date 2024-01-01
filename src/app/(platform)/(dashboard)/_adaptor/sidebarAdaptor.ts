import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

function getAccordionDefaultValue(expanded:Record<string, any>) {
  const defaultAccordionValue: string[] = Object.keys(expanded)
  .reduce((acc:string[], key:string) => {
    if (expanded[key]) {
      acc.push(key);
    }
    return acc;
  },[])
  return defaultAccordionValue
}

function onExpand (
  id:string,
  expanded:Record<string, any>,
  setExpanded:React.Dispatch<React.SetStateAction<Record<string,any>>>
  ){
  setExpanded((curr)=> ({
    ...curr,
    [id]: !expanded[id],
  }));
}

export const SidebarAdaptor = () => {
  return (
    {
      AOrganization:useOrganization,
      AOrganizationList: useOrganizationList,
      ALocalStorage: useLocalStorage,
      getAccodionDefValue:getAccordionDefaultValue,
      onExpand
    }
  )
}