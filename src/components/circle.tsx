import Image from "next/image"

interface PaginationCircleProps {
	pageindex:number,
	length:number,
}
const FullCircle = () => {
	return (
		<div className="hover:opacity-75 transition 
				items-center gap-x-2 hidden md:flex">
					<Image 
					src="/full-circle.svg" 
					alt="full-circle" 
					height={8} 
					width={8} 
					/>
		</div>
	)
}

const EmptyCircle = () => {
	return (
			<Image 
			src="/empty-circle.svg" 
			alt="empty-circle" 
			height={8} 
			width={8} 
			/>
	)
}

export const PaginationCircle = ({pageindex, length}:PaginationCircleProps) => {
	return(
		<div className="flex items-center gap-x-2">
			{Array?.from(Array(length), (_, index) =>
				index === pageindex ? (
						<FullCircle key={index} />
				) : (
						<EmptyCircle key={index} />
				)
		)}
		</div>
	)
}

const styles = " display: flex; justify-content: center; gap: 0.625rem "