import { OrganizationBoardFormView } from "./_components/boardFormView"
import { OrganizationBoardItemView } from "./_components/boardItemView"
import { ClientBoardForm } from "./_components/clientForm"

const OrganizationIdPage = () => {
  return (
    <div className="flex flex-col space-y-4">
      {/* <OrganizationBoardFormView /> */}
      <ClientBoardForm />
      <OrganizationBoardItemView />
    </div>
  )
}
export default OrganizationIdPage