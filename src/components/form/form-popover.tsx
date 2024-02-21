"use client";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useAction } from "@/hooks/ues-action";
import { createBoard } from "@/actions/boardAction/index";

import { FormInput } from "./form-input";
import { FormSubmit } from "./form-submit";
import { IFormPopOverProps } from "./interface";

export const FormPopover = ({
	children,
	side = "bottom",
	align,
	sideOffset= 0,
}:IFormPopOverProps) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				{children}
			</PopoverTrigger>
			<PopoverContent
				align={align}
				className="w-80 pt-3"
				side={side}
				sideOffset={sideOffset}
			>
				<div className="text-sm font-medium text-center text-neutral-600 pb-4">
					Create Board
				</div>
			</PopoverContent>
		</Popover>
	)
}