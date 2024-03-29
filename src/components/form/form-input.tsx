"use client";

import { forwardRef } from "react";
import { useFormStatus } from "react-dom";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import { IFormInputProps } from "./interface";
import { FormErrors } from "./form-errors";

export const FormInput = forwardRef<HTMLInputElement, IFormInputProps>(({
	id,
	label,
	type,
	placeholder,
	required,
	disabled,
	errors,
	className,
	defaultValue = "",
	onBlur
}, ref)=>{
	const { pending } = useFormStatus();
	return (
		<div className="space-y-2">
			<div className="space-y-1">
				{
					label ? (
						<Label
							htmlFor={id}
							className="text-xs font-semibold text-neutral-700"
						>
							{label}
						</Label>
					) :
					null
				}
				<Input
					onBlur={onBlur}
					defaultValue={defaultValue}
					ref={ref}
					required={required}
					name={id}
					id={id}
					placeholder={placeholder}
					type={type}
					disabled={pending || disabled}
					className={cn(
						"text-sm px-2 py-1 h-7",
						className
					)}
					aria-describedby={`${id}-error`}
				/>
				<FormErrors
					id={id}
					errors={errors}
				/>
			</div>
		</div>
	)
});

FormInput.displayName = "FormInput";

