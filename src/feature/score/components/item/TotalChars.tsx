import {useTranslation} from 'react-i18next';

import {typeModeUnion} from '@types';

import {useAppSelector} from '@store/redux-hooks';

import Indicator from '@components/score/Indicator';

import {selectTotalChars} from '../../scoreSelectors';

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
			<path d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
		</svg>
	);
};

const TotalChars = ({mode}: {mode: typeModeUnion}) => {
	const totalChars = useAppSelector((state) => selectTotalChars(state, mode));
	const {t} = useTranslation('translation');

	return <Indicator value={totalChars} svg={<Svg />} text={t('totalChars')} />;
};

export default TotalChars;
