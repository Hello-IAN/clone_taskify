"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Sheet, SheetContent } from "@/components/ui/sheet";

import { DashboardSidebar } from "./sidebar";

export const MobileSideBar = () => {
	const pathName = usePathname();
	const [isOpen, setIsOpen] = useMobileSidebar();

	useEffect(()=> {
		setIsOpen(false)
	}, [pathName]);

	return (
		<>
			<Button
				onClick={()=>setIsOpen(true)}
				className="block md:hidden mr-2"
				variant="ghost"
				size="sm"
			>
				<Menu className="h-4 w-4" />
			</Button>
			<Sheet open={isOpen} onOpenChange={()=>setIsOpen(false)}>
				<SheetContent
					side="left"
					className="p-2 pt-10"
				>
					<DashboardSidebar 
						storageKey="t-sidebar-mobile-state"
					/>
				</SheetContent>
			</Sheet>
		</>
	)
}