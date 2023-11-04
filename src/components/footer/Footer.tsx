import {useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import tw from 'twin.macro';

const FooterHTML = ({children}: {children: React.ReactNode}) => {
	return (
		<footer css={tw`m-4 container mx-auto overflow-hidden`}>
			<div css={tw`flex items-center flex-wrap gap-7 px-4`}>{children}</div>
		</footer>
	);
};

const Logo = ({children}: {children: React.ReactNode}) => {
	return (
		<span css={tw`text-sm text-gray-500  dark:text-gray-400 ml-auto flex-grow-[0.5]`}>
			<Link to="/" css={tw`hover:underline`}>
				{children}
			</Link>
		</span>
	);
};

const LinksContainer = ({children}: {children: React.ReactNode}) => {
	return (
		<div css={tw`flex mt-4 space-x-6  sm:mt-0 gap-4 flex-grow-[0.5] justify-end`}>{children}</div>
	);
};

const LinkHTML = ({children, href}: {children: React.ReactNode; href: string}) => {
	return (
		<a css={tw`text-gray-500 hover:text-gray-900 dark:hover:text-white`} href={href}>
			{children}
		</a>
	);
};

const GitHub = () => {
	return (
		<svg css={tw`w-5 h-5`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path
				fillRule="evenodd"
				d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

const Footer = () => {
	const dateRef = useRef(new Date());
	const {i18n} = useTranslation();
	return (
		<FooterHTML>
			<Logo>© {dateRef.current.getFullYear()} Typing Trainer</Logo>
			<LinksContainer>
				<LinkHTML href="https://github.com/Ra3d0r/typing-trainer">
					<GitHub />
					<span className="sr-only">GitHub account</span>
				</LinkHTML>
			</LinksContainer>
			<button
				type="button"
				data-dropdown-toggle="language-dropdown"
				className="inline-flex p-1 justify-center text-gray-500 rounded cursor-pointer dark:hover:text-white dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
				onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')}
			>
				{i18n.language.toUpperCase()}
			</button>
		</FooterHTML>
	);
};

export default Footer;
