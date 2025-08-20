import Image from "next/image";

export default function Home() {
	return (
		<>
			<main className="flex justify-center-safe items-end pt-[7rem]">
				<section className="flex flex-col items-center gap-[1rem]">
					<Image
						className="w-[10rem] rounded-2xl object-none"
						src="/Gabriel Machado.webp"
						width={150}
						height={150}
						alt="foto de perfil"
						priority={true}
					/>
					<section className="sm:w-[19rem] font-bodoni">
						<h1 className="text-center text-4xl ">
							Hello World! Eu sou Gabriel Machado
						</h1>
						<h2 className="text-center text-2xl my-[1rem]">
							Desenvolvedor front-end
						</h2>
						<p className="p-[1.5rem] text-xl">
							Atualmente, trabalho com React e Angular, TypeScript e
							ferramentas modernas para criar aplicações
							escaláveis, com foco em arquitetura limpa,
							usabilidade e performance. Nos próximos anos, quero
							evoluir como full-stack developer, aprofundando meus
							conhecimentos em back-end e infraestrutura para
							entregar soluções completas de ponta a ponta.
						</p>
					</section>
				<section>
					<h2 className="text-4xl mt-[1rem]">TECH STACKS</h2>
					<section>
						<div>
							<h2>Front-End</h2>
						</div>
					</section>
				</section>
				</section>
			</main>
		</>
	);
}
