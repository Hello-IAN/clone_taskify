import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { INavItemAccordionContentsProps } from "../_interface/IDashboard";


export const NavItemAccordionContents = ({ routes }:INavItemAccordionContentsProps) => {
	const router = useRouter();
	const pathName = usePathname();

	const pushRouter = (href:string) => {
		router.push(href);
	}
	return (
		<AccordionContent className="pt-1 text-neutral-700">
			{routes.map((route) => (
				<Button
					key={route.href}
					size="sm"
					onClick={()=>pushRouter(route.href)}
					className={cn(
						"w-full font-normal justify-start pl-10 mb-1",
						pathName === route.href && "bg-sky-500/10 text-sky-700"
					)}
					variant="ghost"
				>
					{route.icon}
					{route.label}
				</Button>
			))}
		</AccordionContent>
	)
}