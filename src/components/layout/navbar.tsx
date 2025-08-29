"use client";

import React, {
	Dispatch,
	ReactNode,
	SetStateAction,
	useEffect,
	useState,
} from "react";

export default function Navbar() {
	const [element, setElement] = useState("");

	useEffect(() => {
		const section = document.getElementById(element);
		section?.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "start",
		});
	});

	const links: {name: string; href: string}[] = [
		{name: "Sobre mim", href: "about-me"},
		{name: "Experiências", href: "experiences"},
		{name: "Tech Stacks", href: "tech-stacks"},
	];

	return (
		<nav className="fixed z-50 flex justify-self-center justify-center sm:w-[18.5375rem] md:w-[21rem] lg:w-[28rem] xl:w-[35rem] h-[3.5rem] md:h-[3.5rem] xl:h-[3.5rem] mt-[1rem] bg-[#1d99ff]/30 backdrop-blur-md rounded-full items-center animate-enterFromTop">
			<ul className="flex justify-between w-full mx-[1rem] text-[1.3rem] min-[366]:text-[1.3rem] lg:text-[1.75rem] font-bold">
				{links.map((link): ReactNode => {
					return (
						<li
							key={link.name}
							className={`flex justify-center-safe items-center-safe lg:w-[7.8rem] hover:bg-gray-300/20 hover:backdrop-blur-lg hover:text-[#1d99ff] hover:rounded-full hover:py-[0.1rem]`}>
							<button
								className="w-[5.5rem] active:py-[0.23rem] active:bg-[#1d99ff]/30 active:rounded-full"
								onClick={() => setElement(link.href)}>
								{link.name}
							</button>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
