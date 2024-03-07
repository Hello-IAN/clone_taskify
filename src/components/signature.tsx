
import { Dispatch, SetStateAction, useRef } from "react";


interface SignProps {
	setDisable:Dispatch<SetStateAction<boolean>>,
	setSign:Dispatch<SetStateAction<string>>
}

/* function base64ToFile(base64file:string) {
	const index = base64file.indexOf('base64, ');
	const buffer = Buffer.from(base64file.slice(index + 7), 'base64')
	const name = "test"//년-월-일-시-분-초로 만들것
	const file = new File({buffer:buffer, name, type:'image/png'}))
} */

export const SignaturePad = ()=> {
	const onEndSign = () => {
		if (1) {
			//canvasRef.current {
			//const trimmedSign = canvasRef.current
			//	.getTrimmedCanvas()
			//	.toDataURL('image/png')
		}
	}
	return (
		<div>

		</div>
	)
}
