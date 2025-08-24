import {TimelineProps} from "@/types/timeline";
import React from "react";
import Badge from "./badge";

export default function Timeline({timelineData}: TimelineProps) {
	return (
		<div
			className={`flex flex-col justify-center-safe text-start w-full h-auto text-2xl border-[#EBBA21] max-sm:border-1 max-sm:p-[1.5rem] max-sm:rounded-2xl max-sm:bg-[#3B90D7]/25 ${
				timelineData.side === "left"
					? "md:border-l-2 md:justify-self-start"
					: "md:border-r-2 md:justify-self-end"
			}`}>
			<div className="flex flex-col">
				<h2 className="text-center wrap-break-word text-[#EBBA21] text-4xl font-bold">
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
			<ul className="flex flex-col ml-[0.7rem] mb-[1rem] gap-[1.5rem] list-disc marker:text-[#EBBA21]">
				{timelineData.experiences.map((experience) => (
					<li key={experience}>{experience}</li>
				))}
			</ul>
			<ul className="flex flex-wrap justify-center-safe mt-[1rem] gap-[0.5rem]">
				{timelineData.stacks.map((stack) => (
					<Badge key={stack} text={stack}/>
				))}
			</ul>
		</div>
	);
}
