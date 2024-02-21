import { IHintProps } from "@/Interface/ICommon";

export interface IFormInputProps {
	id: string;
	label?: string;
	type?: string;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	errors?: Record<string, string[] | undefined>;
	className?: string;
	defaultValue?: string;
	onBlur?: () => void;
}

export interface IFormErrorsProps {
	id: string;
	errors?: Record<string, string[] | undefined>;
}

export interface IFormSubmitProps {
	children: React.ReactNode;
	disabled?: boolean;
	className?: string;
	variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary";
}

export interface IFormPopOverProps extends IHintProps {
	align?: "start" | "center" | "end";
}