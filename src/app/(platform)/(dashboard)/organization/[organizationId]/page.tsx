import { OrganizationBoardForm } from "./_components/boardFormForm"
import { OrganizationBoardItem } from "./_components/boardItem"
import { ClientBoardFormView } from "./_components/clientBoardFormView"

const OrganizationIdPage = () => {
  return (
    <div className="flex flex-col space-y-4">
      {/* <OrganizationBoardForm /> */}
      <ClientBoardFormView />
      <OrganizationBoardItem />
    </div>
  )
}
export default OrganizationIdPage