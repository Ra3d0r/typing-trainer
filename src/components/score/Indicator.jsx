import tw from 'twin.macro';

const Container = ({children}) => {
	return <div css={tw`flex justify-center items-center space-x-2`}>{children}</div>;
};

const BackgroundSVG = ({children}) => {
	return (
		<div
			css={tw`flex justify-center items-center dark:bg-slate-700 bg-slate-300 w-10 h-10 rounded-full`}
		>
			{children}
		</div>
	);
};

const TextContainer = ({children}) => {
	return <div css={tw`flex flex-col font-medium`}>{children}</div>;
};

const Span = ({children}) => {
	return <span css={tw`text-xs`}>{children}</span>;
};

const Indicator = ({svg, value, text, measure = ''}) => {
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

export {Indicator};
