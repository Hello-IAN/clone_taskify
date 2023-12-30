import { OrgControlloer } from "./_components/org-controller"

const OrganizationIdLayout=({
  children
}:{
  children: React.ReactNode
}) => {
  return (
   <>
   <OrgControlloer />
    {children}
   </>

  )
}

export default OrganizationIdLayout