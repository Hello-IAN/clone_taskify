import { OrganizationBoardFormView } from "./_components/boardFormView"
import { OrganizationBoardItemView } from "./_components/boardItemView"

const OrganizationIdPage = () => {
  return (
    <div className="flex flex-col space-y-4">
      <OrganizationBoardFormView />
      <OrganizationBoardItemView />
    </div>
  )
}
export default OrganizationIdPage