"use client";

import Link from "next/link";
import React, {ReactNode, useState} from "react";
import EmailIcon from "../icons/sidebar/emailIcon";
import GitHubLogo from "../icons/sidebar/gitHubLogo";
import WhatsappIcon from "../icons/sidebar/whatsappIcon";
import LinkedinIcon from "../icons/sidebar/linkedinIcon";

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
					className={`flex flex-col justify-between h-[20rem] md:h-[20rem] lg:h-[21rem] text-xl text-[#0B181F] font-bold bg-[#1d99ff]/30 backdrop-blur-xs rounded-md ${
						display
							? "w-[3.5rem] md:w-[3.5rem] lg:w-[3.5rem]"
							: "pointer-events-none w-[2.5rem]"
					}`}>
					{links.map((link): ReactNode => {
						return (
							<li
								key={link.label}
								className={`flex justify-center-safe h-full items-center-safe hover:backdrop-blur-lg active:backdrop-blur-lg hover:rounded-md active:rounded-md hover:px-[0.15rem]`}>
								<Link
									className="flex w-full items-center lg:h-full"
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
				className={`fixed z-50 flex items-center h-[100vh] ${
					display
						? "left-[4.0rem] sm:left-[4.0rem] md:left-[4.0rem] animate-enterFromLeft"
						: "left-[3rem] animate-exitLeft"
				}`}>
				<button
					className={
						"bg-[#1d99ff]/30 backdrop-blur-xs text-5xl sm:text-5xl md:text-5xl lg:text-6xl px-[0.1rem] rounded-r-sm"
					}
					onClick={() => setDisplay(!display)}>
					{">"}
				</button>
			</div>
		</>
	);
}
