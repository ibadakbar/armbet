import React from "react";
import theme from "../theme";
import "../theme/font-faces.css";
import MainSection from "../sections/Careers/Main";
import "../i18n";
import SEO from "../components/seo";
import { useTranslation } from "react-i18next";

const Careers = ({ data, location }) => {
	const { t } = useTranslation();
	return (
		<>
			<SEO
				title={"Armbet - Careers"}
				url="careers"
				description={`We are looking for a motivated Senior Full Stack Developer in the Ottawa, ON, Canada area. The ideal candidate is a self-starter, has fantastic attention to detail and has the ability to be extremely productive working remotely most of the time.`}
				meta={[
					{
						name: `keywords`,
						content: "armwrestling, careers",
					},
				]}
			/>
			<MainSection data={data} vPadding={theme.spacers[10]} />
		</>
	);
};

export default Careers;
