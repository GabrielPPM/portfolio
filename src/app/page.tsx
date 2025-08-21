import StackCard from "@/components/home/stackCard";
import TechStackLayout from "@/components/home/techStackLayout";
import AngularLogo from "@/components/icons/home/techStacks/angularLogo";
import Css3Logo from "@/components/icons/home/techStacks/css3Logo";
import GitLogo from "@/components/icons/home/techStacks/gitLogo";
import Html5Logo from "@/components/icons/home/techStacks/html5Logo";
import JavascriptLogo from "@/components/icons/home/techStacks/javascriptLogo";
import MongoLogo from "@/components/icons/home/techStacks/mongoLogo";
import NextjsLogo from "@/components/icons/home/techStacks/nextjsLogo";
import NodejsLogo from "@/components/icons/home/techStacks/nodeLogo";
import ReactLogo from "@/components/icons/home/techStacks/reactLogo";
import TailwindcssLogo from "@/components/icons/home/techStacks/tailwindcssLogo";
import TypescriptLogo from "@/components/icons/home/techStacks/typescriptLogo";
import Card from "@/types/card.types";
import Image from "next/image";

export default function Home() {
	const cards: Card[] = [
		{
			img: <JavascriptLogo />,
			imgTitle: "JavaScript",
			level: 7,
		},
		{
			img: <Html5Logo />,
			imgTitle: "HTML",
			level: 9,
		},
		{
			img: <Css3Logo />,
			imgTitle: "CSS",
			level: 8,
		},
		{
			img: <AngularLogo />,
			imgTitle: "Angular",
			level: 8,
		},
		{
			img: <ReactLogo />,
			imgTitle: "React",
			level: 7,
		},
		{
			img: <NextjsLogo />,
			imgTitle: "Next.js",
			level: 6,
		},
		{
			img: <TypescriptLogo />,
			imgTitle: "Typescript",
			level: 8,
		},
		{
			img: <TailwindcssLogo />,
			imgTitle: "Tailwind CSS",
			level: 7,
		},
		{
			img: <NodejsLogo />,
			imgTitle: "Node.js",
			level: 6,
		},
		{
			img: <MongoLogo />,
			imgTitle: "MongoDB",
			level: 5,
		},
		{
			img: <GitLogo />,
			imgTitle: "Git",
			level: 7,
		},
	];

	const startDate = new Date(2024, 3).getUTCFullYear();
	const todayDate = new Date().getUTCFullYear();
	console.log(startDate);
	console.log(todayDate);
	console.log("Years of experience: ", todayDate - startDate);

	return (
		<>
			<main className="flex justify-center-safe items-end pt-[7rem] mx-[1.5rem]">
				<section className="flex flex-col items-center gap-[1rem] my-[1rem]">
					<Image
						className="w-[10rem] rounded-2xl object-none"
						src="/Gabriel Machado.webp"
						width={150}
						height={150}
						alt="foto de perfil"
						priority={true}
					/>
					<section className="flex flex-col sm:w-[19rem] font-bodoni">
						<h1 className="text-center text-4xl ">
							Hello World! Eu sou Gabriel Machado
						</h1>
						<h2 className="text-center text-2xl my-[1rem]">
							Desenvolvedor front-end
						</h2>
						<p className="text-xl mx-[1rem]">
							Atualmente, trabalho com React e Angular, TypeScript
							e ferramentas modernas para criar aplicações
							escaláveis, com foco em arquitetura limpa,
							usabilidade e performance. Nos próximos anos, quero
							evoluir como full-stack developer, aprofundando meus
							conhecimentos em back-end e infraestrutura para
							entregar soluções completas de ponta a ponta.
						</p>
					</section>
					<section>
						<section className="flex flex-col justify-center text-center w-full">
							<TechStackLayout
								title="Tech Stacks"
								cards={cards}
							/>
						</section>
						<section className="flex flex-col justify-center text-center w-full">
							<TechStackLayout title="Skills" cards={cards} />
						</section>
					</section>
				</section>
			</main>
		</>
	);
}
