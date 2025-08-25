"use client"
import TechStackLayout from "@/components/home/techStackLayout";
import Timeline from "@/components/home/timeline";
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
import Card from "@/types/card";
import {TimelineData} from "@/types/timeline";
import Image from "next/image";
import {ReactNode} from "react";
import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react"
import { useRef } from "react"

export default function Home() {
	const techStackCards: Card[] = [
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
			level: 8,
		},
		{
			img: <NodejsLogo />,
			imgTitle: "Node.js",
			level: 5,
		},
		{
			img: <MongoLogo />,
			imgTitle: "MongoDB",
			level: 3,
		},
		{
			img: <GitLogo />,
			imgTitle: "Git",
			level: 7,
		},
	];

	const startDate = new Date(2024, 3).getUTCFullYear();
	const todayDate = new Date().getUTCFullYear();

	const skillsCards: Card[] = [
		{
			text: todayDate - startDate + "+",
			imgTitle: "Anos de experiência",
		},
		{
			text: "5+",
			imgTitle: "Projetos completos",
		},
	];

	const experiences: TimelineData[] = [
		{
			id: 0,
			side: "left",
			enterprise: "Robert Bosch",
			as: "Desenvolvedor Front-End",
			date: {
				startDate: new Date(2024, 4),
			},
			currentJob: true,
			contract: "CLT",
			experiences: [
				"Desenvolvi uma plataforma de e-commerce interno que elevou em 25% o engajamento e 15% o volume de pedidos de itens manufaturados, por meio de Angular, TypeScript, Tailwind CSS e integração total com back-end.",
				"Aumentei em 43% a eficiência dos processos de feedback de colaboradores ao implementar sistema de avaliação com dashboards dinâmicos, critérios personalizados e métricas consolidadas, utilizando Angular, TypeScript, Tailwind CSS, RxJS e Services para integração com back-end.",
			],
			stacks: ["Angular", "Typescript", "Tailwind CSS", "RxJS"],
		},
		{
			id: 1,
			side: "right",
			enterprise: "PandaMax Grandios",
			as: "Desenvolvedor Front-End",
			date: {
				startDate: new Date(2024, 6),
				endDate: new Date(2024, 9),
			},
			currentJob: false,
			contract: "Freelancer",
			experiences: [
				"Aumentei em 30% a taxa de conversão de contatos ao criar landing page responsiva e otimizada, com protótipo no Figma, desenvolvimento em Angular, TypeScript e Tailwind CSS, integração com Meta Pixel API e Google Analytics, e deploy na Vercel.",
			],
			stacks: ["Angular", "Typescript", "Tailwind CSS", "Vercel"],
		},
	];

	function useParallax(value: MotionValue<number>)

	return (
		<>
			<main className="flex justify-center-safe items-end mx-[1.5rem]">
				<section className="flex flex-col items-center gap-[1rem]">
					<section
						id="about-me"
						className="flex flex-col items-center-safe sm:w-full gap-[1rem]">
						<motion.div className="" initial={{opacity: 0, scale:0}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.4, scale: {type: "spring", visualDuration: 0.4, bounce: 0.5}}} whileHover={{ scale: 1.07 }} whileTap={{ scale: 1.07 }}>
							<Image
							className="w-[12rem] h-[14.4rem] mt-[5.5rem] mb-[1.5rem] rounded-2xl object-none object-center"
							src="/Gabriel Machado.webp"
							width={150}
							height={150}
							alt="foto de perfil"
							priority={true}
							/>
						</motion.div>
						<h1 className="text-center text-4xl font-bodoni">
							Hello World! Eu sou Gabriel Machado
						</h1>
						<h2 className="text-center text-2xl my-[0.5rem] font-bodoni">
							Desenvolvedor front-end
						</h2>
						<p className="max-[333px]:text-center text-[1.65rem] mx-[1rem]">
							Atualmente, trabalho com React, Angular, TypeScript
							e ferramentas modernas para criar aplicações
							escaláveis, com foco em arquitetura limpa,
							usabilidade e performance. Nos próximos anos, quero
							evoluir como full-stack developer, aprofundando meus
							conhecimentos em back-end e infraestrutura para
							entregar soluções completas de ponta a ponta.
						</p>
					</section>

					<section
						id="experiences"
						className="flex flex-col justify-center-safe text-center">
						<h2 className="mt-[5rem] mb-[2rem] text-4xl font-bold">
							Experiências
						</h2>
						<div className="flex flex-col gap-[2rem]">
							{experiences.map(
								(data): ReactNode => (
									<Timeline
										timelineData={data}
										key={data.id}
									/>
								)
							)}
						</div>
					</section>

					<section id="tech-stacks">
						<section className="flex flex-col justify-center mt-[3rem] text-center w-full">
							<TechStackLayout
								title="Tech Stacks"
								cards={techStackCards}
							/>
						</section>
						<section className="flex flex-col justify-center text-center w-full">
							<TechStackLayout
								title="Skills"
								cards={skillsCards}
							/>
						</section>

					</section>
				</section>
			</main>
		</>
	);
}
