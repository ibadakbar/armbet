import React from "react";
import theme from "../theme";
import "../theme/font-faces.css";
import MainSection from "../sections/Profile/Main";
import "../i18n";
import SEO from "../components/seo";
import { useTranslation } from "react-i18next";

const Leaderboard = ({ data, location }) => {
	const { t } = useTranslation();
	return (
		<MainSection
			bgColor={theme.colors.color2ShadeDown[5]}
			minFullscreen
			data={data}
			vPadding={theme.spacers[6]}
		/>
	);
};

export default Leaderboard;
