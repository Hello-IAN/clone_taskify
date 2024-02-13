import { OrganizationBoardFormView } from "./_components/boardFormView"
import { OrganizationBoardItemView } from "./_components/boardItemView"
import { ClientBoardFormView } from "./_components/clientBoardFormView"

const OrganizationIdPage = () => {
  return (
    <div className="flex flex-col space-y-4">
      {/* <OrganizationBoardFormView /> */}
      <ClientBoardFormView />
      <OrganizationBoardItemView />
    </div>
  )
}
export default OrganizationIdPage