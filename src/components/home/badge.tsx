import React from "react";

type BadgeProps = {
	text: string;
};

export default function Badge({text}: BadgeProps) {
	return (
		<li className="w-fit px-[1rem] text-[1.05rem] bg-[#0a2838]/70 text-[#F19C2B] font-bold border-1 border-[#F19C2B] rounded-full">
			{text}
		</li>
	);
}
