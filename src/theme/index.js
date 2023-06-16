import Logo from "../assets/images/logo.png";
import navBarMobileIcon from "../assets/images/menu-icon.png";
import navBarCloseMenuIcon from "../assets/images/close-menu-icon.png";
import Feature1Icon from "../assets/images/features_icon_1.png";
import Feature2Icon from "../assets/images/features_icon_2.png";
import Feature3Icon from "../assets/images/features_icon_3.png";
import InlineLoader from "../assets/images/inline_loader.gif";
import MaleIcon from "../assets/images/male.png";
import FemaleIcon from "../assets/images/female.png";
import TransgenderIcon from "../assets/images/transgender.png";
import IOSIcon from "../assets/images/ios.png";
import AndroidIcon from "../assets/images/android.png";
import chroma from "chroma-js";

const colors = {
	color1: "#E52D2D",
	color1ShadeDown: chroma.scale(["#E52D2D", "black"]).colors(12),
	color1ShadeUp: chroma.scale(["#E52D2D", "white"]).colors(12),
	color2: "#344A5F",
	color2ShadeDown: chroma.scale(["#344A5F", "black"]).colors(12),
	color2ShadeUp: chroma.scale(["#344A5F", "white"]).colors(12),
	color3: "#EAEFF2",
	color3ShadeDown: chroma.scale(["#EAEFF2", "black"]).colors(12),
	color3ShadeUp: chroma.scale(["#EAEFF2", "white"]).colors(12),
	color4: "#7FB99D",
	color4ShadeDown: chroma.scale(["#7FB99D", "black"]).colors(12),
	color4ShadeUp: chroma.scale(["#7FB99D", "white"]).colors(12),
	color5: "white",
	color5ShadeDown: chroma.scale(["white", "black"]).colors(12),
	color5ShadeUp: chroma.scale(["white", "white"]).colors(12),
	title: "#344A5F",
	text: "#344A5F",
	error: "#E52D2D",
	success: "#3bbd82",
};

const theme = {
	name: "Armbet",
	bgColor: "white",
	colors,
	inputs: {
		bgColor: "#F6F8F9",
		padding: "10px 15px",
		borderRadius: "4px",
		labelColor: "#ABB1BB",
		labelMarginBottom: "15px",
		placeholderColor: "#D2D7D9",
	},
	maxWidth: "1200px",
	sectionPadding: "120px",
	borderRadius: "100px",
	zIndex: {
		front2: 3,
		front1: 2,
		middle2: 1,
		middle1: 0,
		background2: -1,
		background1: -2,
	},
	dialogBoxes: {
		position: "bottom",
	},
	buttons: {
		padding: "8px 50px",
		transition: "300ms all ease-out",
		hover: {
			bgColor: "",
		},
		large: {
			width: "280px",
		},
	},
	links: {
		padding: "8px 0px",
	},
	tags: {
		padding: "5px 20px",
		transition: "300ms all ease-out",
		hover: {
			bgColor: "",
		},
	},
	languages: [
		{ text: "languages.english", name: "en" },
		{ text: "languages.russian", name: "ru" },
		{ text: "languages.hindi", name: "hi" },
		{ text: "languages.spanish", name: "es" },
		{ text: "languages.ukrainian", name: "uk" },
		{ text: "languages.portuguese", name: "pt" },
		{ text: "languages.swedish", name: "sv" },
		{ text: "languages.georgian", name: "ka" },
		{ text: "languages.german", name: "de" },
		{ text: "languages.turkish", name: "tr" },
		{ text: "languages.italian", name: "it" },
		{ text: "languages.french", name: "fr" },
	],
	wellTranslatedLanguages: ["en", "fr"],
	breakpoints: [480, 768, 1020, 1440],
	fontFamily: "Brandon Grotesque",
	fontLineHeight: "1.25em",
	fontSizes: [
		"1.1rem",
		"1.5rem",
		"2rem",
		"2.5rem",
		"3rem",
		"3.5rem",
		"4rem",
		"4.5rem",
		"5rem",
		"8rem",
		"12rem",
		"15rem",
	],
	mobileFontSizes: [
		"1rem",
		"1.25rem",
		"1.5rem",
		"2rem",
		"2.25rem",
		"2.5rem",
		"2.75rem",
		"3rem",
		"3.25rem",
		"6rem",
		"10rem",
		"11rem",
	],
	spacers: [
		"0.5rem",
		"0.75rem",
		"1rem",
		"1.5rem",
		"2rem",
		"2.5rem",
		"3rem",
		"3.5rem",
		"4rem",
		"5rem",
		"6rem",
		"7rem",
		"8rem",
		"9rem",
		"10rem",
		"12rem",
		"14rem",
		"16rem",
		"18rem",
	],
	inlineLoader: InlineLoader,
	content: {
		navBar: {
			logoAlt: "logoAlt",
			logo: Logo,
			burgerIcon: navBarMobileIcon,
			closeMenuIcon: navBarCloseMenuIcon,
			items: [
				{
					type: "text",
					text: "navBar.item1.text",
					name: "about",
					onClick: "scrollTo",
					hoverStyle: "color: " + colors.color1,
				},
				{
					type: "text",
					text: "navBar.item2.text",
					name: "comingSoon",
					onClick: "scrollTo",
					hoverStyle: "color: " + colors.color1,
				},
				{
					type: "text",
					text: "navBar.item4.text",
					name: "merch",
					url: "https://armbet.net/collections",
					hoverStyle: "color: " + colors.color1,
				},
				{
					type: "button",
					text: "navBar.item3.text",
					name: "signUp",
					onClick: "scrollTo",
				},
			],
			type: "sticky",
			height: "75px",
			transition: "200ms ease-in-out",
			bgTransition: "200ms ease-in-out",
			mobileMenu: {
				marginTop: "5%",
				bgColor: "",
			},
		},
		notFound: {
			title: "notFound.title",
			text: "notFound.text",
		},
		headline: `headline`,
		headlineText: `headlineText`,
		about: {
			title: "about.title",
			text: "about.text",
		},
		features: [
			{
				title: "features1.title",
				text: "features1.text",
				img: Feature1Icon,
			},
			{
				title: "features2.title",
				text: "features2.text",
				img: Feature2Icon,
			},
			{
				title: "features3.title",
				text: "features3.text",
				img: Feature3Icon,
			},
		],
		comingSoon: {
			title: "comingSoon.title",
			text: "comingSoon.text",
			text2: "comingSoon.text2",
		},
		signUp: {
			title: "signUp.title",
			text: "signUp.text",
			fields: [],
			stores: [
				{
					text: "App Store",
					icon: IOSIcon,
					url: "https://apps.apple.com/tt/app/armbet/id1525205708",
				},
				{
					text: "Google Play Store",
					icon: AndroidIcon,
					url:
						"https://play.google.com/store/apps/details?id=com.armbet.app",
				},
			],
			genders: [
				{ text: "genders.male", icon: MaleIcon, name: "male" },
				{ text: "genders.female", icon: FemaleIcon, name: "female" },
				{ text: "genders.other", icon: TransgenderIcon, name: "other" },
			],
		},
		signUpSuccess: {
			title: "signUpSuccess.title",
			text: "signUpSuccess.text",
		},
		leaderboard: {
			title: "leaderboard.title",
			text: "leaderboard.description",
		},
	},
};

export default theme;
