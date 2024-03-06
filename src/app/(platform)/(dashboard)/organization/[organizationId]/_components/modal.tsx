'use client'
import { useModalHandler } from "@/hooks/use-test-modal"
import { SwipeInModal } from "./swipe";

/**
 * responsibility: swipe component
 * contents: swipe
 */
export const TestModal = () => {
	const [open, setOpen] = useModalHandler();
	return (
		<SwipeInModal />
	)
}