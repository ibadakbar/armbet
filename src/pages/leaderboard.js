import React from "react";
import theme from "../theme";
import "../theme/font-faces.css";
import MainSection from "../sections/LeaderBoard/Main";
import "../i18n";
import SEO from "../components/seo";
import { useTranslation } from "react-i18next";

const Leaderboard = ({ data, location }) => {
	const { t } = useTranslation();
	return (
		<>
			<SEO
				title={"Armbet - " + t("leaderboard")}
				url="leaderboard"
				description={t("leaderboard.description")}
				meta={[
					{
						name: `keywords`,
						content: "armwrestling, leaderboard, coins",
					},
				]}
			/>
			<MainSection
				minFullscreen
				data={data}
				vPadding={theme.spacers[3]}
			/>
		</>
	);
};

export default Leaderboard;
