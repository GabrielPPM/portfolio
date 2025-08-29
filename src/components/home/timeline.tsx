import {TimelineProps} from "@/types/timeline";
import React from "react";
import Badge from "./badge";
import {motion} from "motion/react";

export default function Timeline({timelineData, index}: TimelineProps) {
	return (
		<motion.div
			id={String(timelineData.id)}
			className={`flex flex-col justify-center-safe text-start w-full h-auto text-2xl border-[#F19C2B] max-sm:border-1 max-sm:p-[1.5rem] max-sm:rounded-2xl max-sm:bg-[#1782da]/25 ${
				timelineData.side === "left"
					? "md:border-l-2 md:justify-self-start"
					: "md:border-r-2 md:justify-self-end"
			}`}
			initial={{opacity: 0, x: `${index % 2 === 0 ? "-100%" : "100%"}`}}
			whileInView={{opacity: 1, x: "0%"}}
			transition={{
				x: {
					visualDuration: 0.5,
				},
			}}>
			<div className="flex flex-col">
				<h2 className="text-center wrap-break-word text-[#F19C2B] text-4xl font-bold">
					{timelineData.enterprise}
				</h2>
				<div className="flex flex-wrap justify-center-safe w-full gap-[0.2rem]">
					<p className="text-center">{timelineData.as}</p>
					<p>({timelineData.contract})</p>
				</div>
			</div>

			<p className="place-self-end my-[1rem]">
				{timelineData.date.startDate.getMonth()}
				{"/"}
				{timelineData.date.startDate.getFullYear()}
				{timelineData.currentJob
					? ""
					: ` -  ${timelineData.date.endDate?.getMonth()}/${timelineData.date.endDate?.getFullYear()}`}
			</p>
			<ul className="flex flex-col ml-[0.7rem] mb-[1rem] gap-[1.5rem] list-disc marker:text-[#F19C2B]">
				{timelineData.experiences.map((experience) => (
					<li key={experience}>{experience}</li>
				))}
			</ul>
			<ul className="flex flex-wrap justify-center-safe mt-[1rem] gap-[0.5rem]">
				{timelineData.stacks.map((stack) => (
					<Badge key={stack} text={stack} />
				))}
			</ul>
		</motion.div>
	);
}
