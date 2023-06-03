import Indicator from '../../../../components/score/Indicator';
import useTime from '../../../../hooks/useTime';

const Svg = () => {
	return (
		<svg
			data-darkreader-inline-stroke
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			className="w-6 h-6"
		>
			<path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
		</svg>
	);
};

const Time = ({mode}) => {
	const time = useTime(mode);

	return <Indicator value={time} svg={<Svg />} text="Time" />;
};

export default Time;
