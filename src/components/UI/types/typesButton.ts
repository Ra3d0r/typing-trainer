export interface IPropsButton {
	children: React.ReactNode;
	onClick: () => void;
	isAlternative?: boolean;
	size?: keyof ISize;
}

export interface ISize {
	small: string;
	medium: string;
	large: string;
	fullMedium: string;
}
