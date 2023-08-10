import tw from 'twin.macro';

import {IPropsIndicator} from './types/typesIndicator';

const Container = ({children}: {children: React.ReactNode}) => {
	return <div css={tw`flex justify-center items-center space-x-2`}>{children}</div>;
};

const BackgroundSVG = ({children}: {children: React.ReactNode}) => {
	return (
		<div
			css={tw`flex justify-center items-center dark:bg-slate-700 bg-slate-300 w-10 h-10 rounded-full`}
		>
			{children}
		</div>
	);
};

const TextContainer = ({children}: {children: React.ReactNode}) => {
	return <div css={tw`flex flex-col font-medium`}>{children}</div>;
};

const Span = ({children}: {children: React.ReactNode}) => {
	return <span css={tw`text-xs`}>{children}</span>;
};

const Indicator = ({svg, value, text, measure = ''}: IPropsIndicator) => {
	return (
		<Container>
			<BackgroundSVG>{svg}</BackgroundSVG>
			<TextContainer>
				<p>
					{value}
					<Span>{measure}</Span>
				</p>
				<Span>{text}</Span>
			</TextContainer>
		</Container>
	);
};

export default Indicator;
