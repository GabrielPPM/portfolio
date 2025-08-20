import Image from "next/image";

export default function Home() {
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
							<h2 className="text-5xl mt-[1rem]">TECH STACKS</h2>
							<h2 className="text-4xl py-[1rem]">Front-End</h2>
							<div className="flex flex-wrap justify-center">
								<Image
									src={
										"https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif"
									}
									className="border-2 border-[#EBBA21] p-[0.5rem] bg-[#ffffff]"
									width={80}
									height={80}
									alt="Angular"
								/>
								<Image
									src={
										"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
									}
									className="border-2 border-[#EBBA21] p-[0.5rem] bg-[#ffffff]"
									width={80}
									height={80}
									alt="React"
								/>
								<Image
									src={
										"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
									}
									className="border-2 border-[#EBBA21] p-[0.5rem] bg-[#ffffff]"
									width={80}
									height={80}
									alt="Typescript"
								/>
								<Image	
									src={
										"https://www.svgrepo.com/show/354113/nextjs-icon.svg"
									}
									className="border-2 border-[#EBBA21] p-[0.5rem] bg-[#ffffff]"
									width={80}
									height={80}
									alt="Angular"
								/>
								<Image
									src={
										"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
									}
									className="object-fit border-2 border-[#EBBA21] p-[0.5rem] bg-[#ffffff]"
									width={80}
									height={80}
									alt="Angular"
								/>
							</div>
							<h2 className="text-4xl py-[1rem]">Back-End</h2>
							<div className="flex flex-wrap justify-center">
								<Image
									src={
										"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.png"
									}
									className="border-2 border-[#EBBA21] p-[0.5rem] bg-[#ffffff]"
									width={80}
									height={80}
									alt="Node"
								/>
								<Image
									src={
										"https://images.icon-icons.com/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"
									}
									className="border-2 border-[#EBBA21] p-[0.5rem] bg-[#ffffff]"
									width={80}
									height={80}
									alt="MongoDB"
								/>
							</div>
							<h2 className="text-4xl py-[1rem]">Tools</h2>
							<div className="flex flex-wrap justify-center">
								<Image
									src={
										"https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
									}
									className="border-2 border-[#EBBA21] p-[0.5rem] bg-[#ffffff]"
									width={80}
									height={80}
									alt="Git"
								/>
								<Image
									src={
										"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
									}
									className="border-2 border-[#EBBA21] p-[0.5rem] bg-[#ffffff]"
									width={80}
									height={80}
									alt="GitHub"
								/>
							</div>
						</section>
					</section>
				</section>
			</main>
		</>
	);
}
