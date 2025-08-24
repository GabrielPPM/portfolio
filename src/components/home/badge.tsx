import React from "react";

type BadgeProps = {
	text: string;
};

export default function Badge({text}:BadgeProps) {
	return (
		<li className="w-fit px-[1rem] text-[1.05rem] bg-[#0a2838]/70 text-[#EBBA21] font-bold border-1 border-[#EBBA21] rounded-full">
			{text}
		</li>
	);
}
