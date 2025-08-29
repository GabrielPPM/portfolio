"use client";

import Card from "@/types/card";
import React, { useState } from "react";
import { motion } from "motion/react";

type StackCardProps = {
	card: Card;
};

export default function StackCard({ card }: StackCardProps) {
	const [width, setWidth] = useState(0);

	setTimeout(() => {
		if (card.level) setWidth(card.level);
	}, 300);

	return (
		<motion.div
			className="flex justify-center-safe items-center-safe w-[8rem] h-[11.5rem]  bg-[#0a4d85]/35 rounded-xl text-[#F19C2B]"
			layout
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{
				opacity: {
					delay: 0.2,
					visualDuration: 0.3,
				},
				type: "spring",
				damping: 20,
				stiffness: 200,
			}}>
			<div className="flex flex-col items-center-safe p-[1rem] gap-[1rem]">
				<span className="drop-shadow-[0px_0px_15px_rgba(0,204,255,0.705)]">
					{card.img ? (
						card.img
					) : (
						<p className="text-center text-5xl">{card.text}</p>
					)}
				</span>
				<p className="text-lg">{card.imgTitle}</p>
				{card.level && (
					<span
						className={`place-self-start h-[0.7rem] m-auto bg-linear-[65deg,#F19C2B] rounded-md drop-shadow-[0px_0px_15px_rgba(0,204,255,0.705)]`}
						style={{
							width: width * 10 + "px",
							transition: "width 0.7s ease-in",
						}}
					/>
				)}
			</div>
		</motion.div>
	);
}
