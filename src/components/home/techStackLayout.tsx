import React from "react";
import StackCard from "./stackCard";
import Card from "@/types/card.types";

type StackCardProps = {
	title: string;
	cards: Card[];
};

export default function TechStackLayout({ title, cards }: StackCardProps) {
	return (
		<div className="mt-[2.5rem] font-bold">
			<h2 className="text-4xl mb-[2rem]">{title}</h2>
			<div className="flex flex-wrap justify-between gap-[1rem]">
				{cards.map((card) => (
					<StackCard card={card} key={card.imgTitle}/>
				))}
			</div>
		</div>
	);
}
