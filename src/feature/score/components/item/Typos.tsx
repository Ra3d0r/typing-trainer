import {useTranslation} from 'react-i18next';

import {typeModeUnion} from '@types';

import {useAppSelector} from '@store/redux-hooks';

import Indicator from '@components/score/Indicator';

import {selectTypos} from '../../scoreSelectors';

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
			<path d="M6 18L18 6M6 6l12 12" />
		</svg>
	);
};

const Typos = ({mode}: {mode: typeModeUnion}) => {
	const typos = useAppSelector((state) => selectTypos(state, mode));
	const {t} = useTranslation('translation');
	return <Indicator value={typos} svg={<Svg />} text={t('typos')} />;
};

export default Typos;
