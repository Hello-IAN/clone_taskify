/* a Three point of view 
type.ts-> about input and ouput,
schema.ts-> about zod validation,
and last index.ts -> handler and real action function
it is for matching abstraction level we called layer level. 
*/

import { z } from "zod";

export type FieldError<T> = {
	[K in keyof T]?: string[];
};

export type ActionState<TInput, TOutput> = {
	feildError?: FieldError<TInput>;
	error?: string | null;
	data?: TOutput;
};

export const createSafeAction = <TInput, TOutput>(
	schema: z.Schema<TInput>,
	handler: (validatedData: TInput) => Promise<ActionState<TInput, TOutput>>
) => {
	return (async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
		const validationResult = schema.safeParse(data)
		if (!validationResult.success) {
			return ({
				feildError: validationResult.error.flatten().fieldErrors as FieldError<TInput>,
			})
		}

		return handler(validationResult.data);
	})
}
