"use client";

import Link from "next/link";
import React, { ReactNode, useState } from "react";
import EmailIcon from "../icons/emailIcon";
import GitHubLogo from "../icons/gitHubLogo";
import WhatsappIcon from "../icons/whatsappIcon";
import LinkedinIcon from "../icons/linkedinIcon";

export default function Sidebar() {
	const [display, setDisplay] = useState(true);

	const links: {
		img: () => React.JSX.Element;
		label: string;
		href: string;
	}[] = [
		{
			img: LinkedinIcon,
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/gabriel-plinio-porto-machado/",
		},
		{
			img: GitHubLogo,
			label: "GitHub",
			href: "https://github.com/GabrielPPM",
		},
		{
			img: WhatsappIcon,
			label: "Whatsapp",
			href: "https://wa.me/19995756148",
		},
		{
			img: EmailIcon,
			label: "E-mail",
			href: "gabriel.machado.tblh@gmail.com",
		},
	];

	return (
		<>
			<nav
				className={`fixed z-50 left-[0.5rem] flex items-center-safe justify-center h-[100vh] ${
					display ? "animate-enterFromLeft" : "animate-exitLeft"
				}`}>
				<ul
					className={`flex flex-col justify-between h-[15rem] md:h-[17rem] lg:h-[21rem]  text-xl text-[#0B181F] font-bold bg-[#3B90D7]/50 backdrop-blur-xs rounded-md ${
						display
							? "w-[2.5rem] md:w-[3rem] lg:w-[3rem]"
							: "pointer-events-none w-[2.5rem]"
					}`}>
					{links.map((link): ReactNode => {
						return (
							<li
								key={link.label}
								className={`flex justify-center-safe h-full items-center-safe hover:backdrop-blur-lg hover:text-white hover:rounded-md hover:px-[0.15rem]`}>
								<Link
									className="flex items-center lg:h-full"
									href={
										link.label === "E-mail"
											? `mailto:${link.href}`
											: link.href
									}
									target="_blank">
									{link.img()}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
			<div
				className={`fixed flex items-center h-[100vh] ${
					display
						? "left-[3rem] sm:left-[3rem] md:left-[3.5rem] animate-enterFromLeft"
						: "left-[3rem] animate-exitLeft"
				}`}>
				<button
					className={
						"bg-[#3B90D7]/50 backdrop-blur-xs text-4xl sm:text-4xl md:text-5xl lg:text-6xl px-[0.1rem] rounded-r-sm"
					}
					onClick={() => setDisplay(!display)}>
					{">"}
				</button>
			</div>
		</>
	);
}
