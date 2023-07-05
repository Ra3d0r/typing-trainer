import {Link} from 'react-router-dom';
import tw from 'twin.macro';

const CardContainer = ({children}: {children: React.ReactNode}) => {
	return (
		<div
			css={tw`flex flex-col h-60 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
		>
			{children}
		</div>
	);
};

const TextContainer = ({children}: {children: React.ReactNode}) => {
	return <div css={tw`flex-grow`}>{children}</div>;
};

const Title = ({children}: {children: React.ReactNode}) => {
	return (
		<h5 css={tw`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}>
			{children}
		</h5>
	);
};

const Description = ({children}: {children: React.ReactNode}) => {
	return <p css={tw`mb-3 font-normal text-gray-700 dark:text-gray-400`}>{children}</p>;
};

const Button = ({to, children}: {children: React.ReactNode; to: string}) => {
	return (
		<Link
			css={tw`inline-flex max-w-max items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
			to={to}
		>
			{children}
			<svg
				data-darkreader-inline-stroke
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				className="w-5 h-5 ml-2 -mr-1"
			>
				<path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
			</svg>
		</Link>
	);
};

const GameModeCardItem = ({
	mode,
	description,
	title,
}: {
	mode: string;
	description: string;
	title: string;
}) => {
	return (
		<CardContainer>
			<TextContainer>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</TextContainer>
			<Button to={`/game/${mode}`}>Play</Button>
		</CardContainer>
	);
};

export default GameModeCardItem;
