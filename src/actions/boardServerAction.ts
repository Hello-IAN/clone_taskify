"use server";

import { z } from "zod";

import { db } from "@/lib/db";

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
}

export async function deleteBoard(id:string){
	await db.board.delete({
		where:{
			id
		}
	})
}

export async function getAllTitle() {
	return ( await db.board.findMany() )
}