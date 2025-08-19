'use client'

import Link from "next/link";
import React from "react";


export default function Navbar() {
	return (
		<nav className="absolute flex justify-self-center justify-center w-auto max-w-[296.60] h-[2.5rem] mt-[1rem] bg-white rounded-full items-center">
			<ul className="flex w-full mx-[1rem] gap-[1rem] text-xl text-black font-bold">
				<li className="hover:bg-gray-200 hover:rounded-full  hover:p-[0.1rem]">
					<Link href={"/"}>Home</Link>
				</li>
				<li className="hover:bg-gray-200 hover:rounded-full  hover:p-[0.1rem]">
					<Link href={"/teste"}>Experiências</Link>
				</li>
				<li className="hover:bg-gray-200 hover:rounded-full  hover:p-[0.1rem]">
					<Link href={"/teste"}>Sobre mim</Link>
				</li>
				<li className="hover:bg-gray-200 hover:rounded-full  hover:p-[0.1rem]">
					<Link href={"/teste"}>Contato</Link>
				</li>
			</ul>
		</nav>
	);
}
