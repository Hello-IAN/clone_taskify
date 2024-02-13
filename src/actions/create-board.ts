"use client"

/* zod의 min과 같이, 클라이언트 사이드에서 에러나 형체크를 연습하기 위한 컴포넌트 */
import { z } from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

/* 개인적으로 이렇게 type선언 하는 것을 선호하지 않습니다. */
export type State ={
	error?: {
		title?: string[];
	},
	message?: string | null;
}
const CreateBoard = z.object({
	title:z.string(),
});

export async function createBoard(formData: FormData) {
	const { title } = CreateBoard.parse({
		title: formData.get("title")
	})

	await db.board.create({
		data: {
			title,
		}
	})
	/* 추후 endpoint를 받아 동적으로 처리하도록 변경 예정 */
	revalidatePath("/organization/org_2aGQ5J6ZUWpM5DPvgoADL7wz2u4")
}
