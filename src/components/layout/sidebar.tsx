import Link from "next/link";
import React, {ReactNode} from "react";
import EmailIcon from "../icons/emailIcon";
import GitHubLogo from "../icons/gitHubLogo";
import WhatsappIcon from "../icons/whatsappIcon";
import LinkedinIcon from "../icons/linkedinIcon";

export default function Sidebar() {
	
	const links: {img: () => React.JSX.Element; label: string; href: string}[] =
		[
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
		<nav className="fixed z-50 left-[0.5rem] top-[19rem] flex items-center-safe justify-center w-[2.5rem] md:w-[3rem] lg:w-[3rem] h-[15rem] md:h-[17rem] lg:h-[21rem] bg-white/50 backdrop-blur-md rounded-md animate-enterFromLeft">
			<ul className="flex flex-col justify-between w-full h-full text-xl text-black font-bold">
				{links.map((link): ReactNode => {
					return (
						<li
							key={link.label}
							className={`flex justify-center-safe h-full items-center-safe hover:bg-gray-300/20 hover:backdrop-blur-lg hover:text-white hover:rounded-md hover:px-[0.15rem] active:text-white`}>
							<Link className="flex items-center lg:h-full" href={link.label === "E-mail" ? `mailto:${link.href}` : link.href} target="_blank">{link.img()}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
