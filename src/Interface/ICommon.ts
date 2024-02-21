export interface ISpesificProps {
	url:string,
	id:string,
	suffix:string
}

export interface IHintProps {
	children: React.ReactNode;
	description: string;
	side?: "left" | "right" | "top" | "bottom";
	sideOffset?: number;
}