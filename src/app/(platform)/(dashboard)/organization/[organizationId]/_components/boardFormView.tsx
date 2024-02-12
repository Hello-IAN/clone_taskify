import { create } from "@/actions/boardServerAction";

import { Button } from "@/components/ui/button";

export const OrganizationBoardFormView = () => {
	return (
		<form action={create}>
      <input 
        id="title"
        name="title"
        required
        placeholder="제목을 입력해주세요"
        className="border-black border p-1" 
      />
      <Button type="submit">
        Submit
      </Button>
    </form>
	)
}