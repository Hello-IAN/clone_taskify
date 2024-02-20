"use client";

import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { IFormSubmitProps } from "./interface";

export const FormSubmit = ({
	children,
	disabled,
	className,
	variant
}:IFormSubmitProps) => {
	const { pending } = useFormStatus();

	return (
		<Button
			disabled={pending || disabled}
			type="submit"
			variant={variant}
			size="sm"
			className={cn(className)}
		>
			{children}
		</Button>
	)
}