"use server";

import { z } from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

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

export async function deleteBoard(id:string){
	await db.board.delete({
		where:{
			id
		}
	})
	revalidatePath("/organization/org_2aGQ5J6ZUWpM5DPvgoADL7wz2u4")
}

export async function getAllTitle() {
	return ( await db.board.findMany() )
}