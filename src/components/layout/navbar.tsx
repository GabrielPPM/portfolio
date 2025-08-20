"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

export default function Navbar() {
	const pathname = usePathname();

	const links: {name: string, href: string}[] = [
		{ name: "Home", href: "/" },
		{ name: "Experiências", href: "/experiences" },
		{ name: "Sobre mim", href: "/about" },
		{ name: "Contato", href: "/contact" },
	];

	return (
		<nav className="fixed z-50 flex justify-self-center justify-center sm:w-[18.5375rem] md:w-[21rem] lg:w-[28rem] xl:w-[35rem] h-[2.5rem] md:h-[3rem] xl:h-[3rem] mt-[1rem] bg-[#3B90D7]/50 backdrop-blur-md rounded-full items-center animate-enterFromTop">
			<ul className="flex justify-around w-full mx-[1rem] gap-[1rem] text-xl lg:text-[1.5rem] font-bold">
				{links.map((link): ReactNode => {
					return (
						<li key={link.name} className={`flex justify-center-safe items-center-safe lg:w-[7.8rem] hover:bg-gray-300/20 hover:backdrop-blur-lg hover:text-[#3B90D7] hover:rounded-full hover:py-[0.1rem]`} style={{color: pathname === link.href ? '#EBBA21' : '#0B181F'}}>
							<Link className="active:text-[#EBBA21]" href={link.href}>{link.name}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
