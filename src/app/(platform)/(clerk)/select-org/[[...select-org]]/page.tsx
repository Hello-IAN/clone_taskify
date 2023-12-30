import { OrganizationList } from "@clerk/nextjs"

export const CreateOrganiztionPage = () => {
  return (
    <OrganizationList 
      hidePersonal
      afterSelectOrganizationUrl="/organiztion/:id"
      afterCreateOrganizationUrl="/organiztion/:id"
    />
  )
}

export default CreateOrganiztionPage