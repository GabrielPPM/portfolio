import Link from "next/link";
import React, { ReactNode } from "react";

export default function Sidebar() {
	const links: { img: string; label: string; href: string }[] = [
		{
			img: "",
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/gabriel-plinio-porto-machado/",
		},
		{
			img: "",
			label: "GitHub",
			href: "https://www.linkedin.com/in/gabriel-plinio-porto-machado/",
		},
		{
			img: "",
			label: "Whatsapp",
			href: "https://www.linkedin.com/in/gabriel-plinio-porto-machado/",
		},
		{
			img: "",
			label: "E-mail",
			href: "https://www.linkedin.com/in/gabriel-plinio-porto-machado/",
		},
	];

	return (
		<nav className="fixed z-50 left-[0.5rem] top-[19rem] flex items-center-safe justify-center w-[2.5rem] md:w-[21rem] lg:w-[30rem] h-[10rem] md:h-[3rem] bg-white/50 backdrop-blur-md rounded-md animate-enterFromLeft">
			<ul className="flex flex-col justify-around w-full h-full mx-[1rem] gap-[1rem] text-xl text-black font-bold">
				{links.map((link): ReactNode => {
					return (
						<li
							key={link.label}
							className={`flex justify-center-safe items-center-safe lg:w-[6.1rem] hover:bg-gray-300/20 hover:backdrop-blur-lg hover:text-white hover:rounded-full hover:py-[0.3rem] active:text-white`}>
							<Link href={link.href}>{link.label}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
