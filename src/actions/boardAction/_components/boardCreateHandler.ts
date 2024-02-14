"use Server";

import { revalidatePath } from "next/cache";

import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

import { InputType, ReturnType } from "../type";

export const createBoardHandler = async (data: InputType): Promise<ReturnType> => {
	const { userId } = auth();

	if (!userId) {
		return {
			error: "권한이 없습니다.",
		}
	}

	const { title } = data;

	let board;

	try {
		board = await db.board.create({
			data:{
				title,
			}
		});
	}catch(error){
		return {
			error: "생성이 실패했습니다."
		} 
	}
	revalidatePath(`/board/${board.id}`);
	return ({data: board});
}
