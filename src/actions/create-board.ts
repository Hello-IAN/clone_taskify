
/* zod의 min과 같이, 클라이언트 사이드에서 에러나 형체크를 연습하기 위한 컴포넌트 */
import { z } from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

/* 개인적으로 이렇게 type선언 하는 것을 선호하지 않습니다. */
export type State = {
	errors?: {
		title?: string[];
	},
	message?: string;
}

const CreateBoard = z.object({
	title:z.string().min(3, {
		message: "3글자 이상 입력해주세요."
	})
});

export async function createBoard(prevState: State, formData: FormData) {
	const validateFields = CreateBoard.safeParse({
		title: formData.get("title"),
	})

	if (!validateFields.success) {
		return {
			errors: validateFields.error.flatten().fieldErrors,
			message: "missing fields"
		}
	}

	const { title } = validateFields.data;
	
	try {
		await db.board.create({
			data: {
				title,
			}
		})
	} catch(error) {
		return {
			
			message: "DB Error",
		}
	}
	/* 추후 endpoint를 받아 동적으로 처리하도록 변경 예정 */
	revalidatePath("/organization/org_2aGQ5J6ZUWpM5DPvgoADL7wz2u4");
	redirect("/organization/org_2aGQ5J6ZUWpM5DPvgoADL7wz2u4");
}
