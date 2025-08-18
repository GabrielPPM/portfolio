import Link from "next/link";
import React from "react";

export default function Navbar() {
	return (
		<nav className="sm:w-[40%] sm:bg-white bg-red-500">
			<ul>
				<li>
					<Link href={"/"}>Home</Link>
					<Link href={"/teste"}>teste</Link>
				</li>
			</ul>
		</nav>
	);
}
