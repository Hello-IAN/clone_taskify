import { atom, useAtom } from "jotai"

const modalAtom = atom(false);

export const useModalHandler = () => {
	return useAtom(modalAtom)
}