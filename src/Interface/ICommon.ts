export interface ISpesificProps {
	url:string,
	id:string,
	suffix:string
}

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