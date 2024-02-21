import Image from "next/image";
import { CreditCard } from "lucide-react";

import { IOgarnizationInfoProps } from "../../../_interface/IDashboard";

export const InfoView = ({organization}:IOgarnizationInfoProps) => {
	console.log("tetet");
	return (
		<div className="flex items-center gap-x-4">
			<div className="w-[60px] h-[60px] relative">
				<Image
					fill
					src={organization?.imageUrl}
					alt="Organization"
					className="rounded-md object-cover"
					sizes="60px"
					priority={true}
				/>
			</div>
			<div className="space-y-1">
				<p className="font-semibold text-xl">
					{organization?.name}
				</p>
				<div className="flex items-center text-xs text-muted-foreground">
					<CreditCard className="h-3 w-3 mr-1"/>
					Free
				</div>
			</div>
		</div>
	)
}