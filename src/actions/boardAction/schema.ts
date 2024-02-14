import { z } from "zod";

export const CreateBoard = z.object({
	title: z.string({
		required_error: "제목을 입력하셔야 합니다.",
		invalid_type_error: "제목을 입력하셔야 합니다."
	}).min(3, {
		message: "제목을 3글자 이상 입력해주세요."
	}),
})

