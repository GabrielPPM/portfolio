"use client";

import Card from "@/types/card.types";
import React, { useState } from "react";

type StackCardProps = {
	card: Card;
};

export default function StackCard({ card }: StackCardProps) {
	const [width, setWidth] = useState(0);

	setTimeout(() => {
		setWidth(card.level);
	}, 1000);

	return (
		<div className="flex flex-col w-[8rem] items-center-safe p-[1rem] gap-[1rem] border-1 border-[#EBBA21] rounded-xl">
			<span className="drop-shadow-[0px_0px_15px_rgba(59,144,215,0.50)]">
				{card.img}
			</span>
			<p className="text-lg">{card.imgTitle}</p>
			<div className="w-full">
				<span
					className={`place-self-start h-[0.7rem] bg-linear-[65deg,#00a3ff,#00a3ff,#006eff,#0040ff,#001db5,#120081] rounded-md border-1 border-white`}
					style={{
						width: width * 10 + "px",
						transition: "width 1s ease-in-out",
					}}
				/>
			</div>
		</div>
	);
}
