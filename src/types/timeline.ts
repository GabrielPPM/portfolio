export interface TimelineProps {
	timelineData: TimelineData;
}

export interface TimelineData {
	id: number;
	side: "left" | "right";
	enterprise: string;
	as: string;
	date: {
		startDate: Date;
		endDate?: Date;
	};
	currentJob: boolean;
	contract: string;
	experiences: string[];
	stacks: string[];
}
