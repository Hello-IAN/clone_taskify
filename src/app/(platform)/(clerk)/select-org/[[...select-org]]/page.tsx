import { OrganizationList } from "@clerk/nextjs"

export const CreateOrganiztionPage = () => {
  return (
    <OrganizationList 
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  )
}

export default CreateOrganiztionPage