"use client";

import Card from "@/types/card";
import React, {useState} from "react";

type StackCardProps = {
	card: Card;
};

export default function StackCard({card}: StackCardProps) {
	const [width, setWidth] = useState(0);
	

	setTimeout(() => {
		if (card.level) setWidth(card.level);
	}, 300);

	return (
		<div className="flex flex-col w-[8rem] h-[10.3125rem] items-center-safe p-[1rem] gap-[1rem] border-1 border-[#EBBA21] rounded-xl">
			<span className="drop-shadow-[0px_0px_15px_rgba(59,144,215,0.70)]">
				{card.img ? (
					card.img
				) : (
					<p className="text-center text-5xl">{card.text}</p>
				)}
			</span>
			<p className="text-lg">{card.imgTitle}</p>
			{card.level && (
				<span
					className={`place-self-start h-[0.7rem] m-auto bg-linear-[65deg,#00c3ff,#00a3ff,#0030b5,#08003a] rounded-md border-1 border-white`}
					style={{
						width: width * 10 + "px",
						transition: "width 0.7s ease-in",
					}}
				/>
			)}
		</div>
	);
}
