export interface Project {
	nature: string;
	name: string;
	role?: string;
	company?: string;
	description: string;
	image: string;
	actions: Action[];
}

export interface Action {
	text: string;
	href: string;
}
