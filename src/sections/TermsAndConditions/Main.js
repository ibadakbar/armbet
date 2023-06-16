import React, { useContext } from "react";
import { themeContext } from "../../theme/Provider";
import SectionContainer from "../../containers/SectionContainer";
import { useTranslation } from "react-i18next";

const MainSection = ({ data, fullscreen, bgColor, vPadding, style }) => {
	const { t } = useTranslation();
	const theme = useContext(themeContext);

	return (
		<SectionContainer
			fullscreen={fullscreen}
			bgColor={bgColor}
			vPadding={vPadding}
			style={style}>
			<div style={{ maxWidth: theme.maxWidth }}>
				<h1>{t("userterms")}</h1>
				<p>{t("user.terms.1.text1")}</p>
				<p>{t("user.terms.1.text2")}</p>
				<address>{t("user.terms.1.text3")}</address>
				<p>{t("user.terms.1.text4")}</p>
				<p>{t("user.terms.1.text5")}</p>
				<h3
					style={{
						marginTop: theme.spacers[10],
						marginBottom: theme.spacers[4],
					}}>
					{t("user.terms.6.title")}
				</h3>
				<p>{t("user.terms.6.text1")}</p>
				<p>{t("user.terms.6.text2")}</p>
				<p>{t("user.terms.6.text3")}</p>
				<li>
					<ol>
						<li>{t("user.terms.6.text4")}</li>
						<li>{t("user.terms.6.text5")}</li>
						<li>{t("user.terms.6.text6")}</li>
						<li>{t("user.terms.6.text7")}</li>
						<li>{t("user.terms.6.text8")}</li>
					</ol>
				</li>
				<h3
					style={{
						marginTop: theme.spacers[10],
						marginBottom: theme.spacers[4],
					}}>
					{t("user.terms.2.title")}
				</h3>
				<ol>
					<li>
						{t("user.terms.2.text1")}
						<ol>
							<li>{t("user.terms.2.text2")}</li>
							<li>{t("user.terms.2.text3")}</li>
							<li>{t("user.terms.2.text4")}</li>
							<li>{t("user.terms.2.text5")}</li>
							<li>{t("user.terms.2.text6")}</li>
						</ol>
					</li>
				</ol>
				<ol start="2">
					<li>{t("user.terms.2.text7")}</li>
					<li>
						{t("user.terms.2.text8")}
						<ol>
							<li>{t("user.terms.2.text9")}</li>
							<li>{t("user.terms.2.text10")}</li>
							<li>{t("user.terms.2.text11")}</li>
							<li>{t("user.terms.2.text12")}</li>
							<li>{t("user.terms.2.text13")}</li>
							<li>{t("user.terms.2.text14")}</li>
							<li>{t("user.terms.2.text15")}</li>
						</ol>
					</li>
				</ol>
				<p>{t("user.terms.2.text16")}</p>

				<p>{t("user.terms.2.text17")}</p>

				<p>
					{t("user.terms.2.text18")}
					<a
						href="mailto:support@armbet.com"
						title="send an email to support@armbet.com">
						support@armbet.com
					</a>{" "}
					{t("user.terms.2.text19")}
				</p>

				<p>{t("user.terms.2.text20")}</p>

				<ol>
					<li>{t("user.terms.2.text21")}</li>
					<li>{t("user.terms.2.text22")}</li>
					<li>{t("user.terms.2.text23")}</li>
				</ol>
				<p>{t("user.terms.2.text24")}</p>

				<h3
					style={{
						marginTop: theme.spacers[10],
						marginBottom: theme.spacers[4],
					}}>
					{t("user.terms.3.title")}
				</h3>
				<p>{t("user.terms.3.text1")}</p>
				<p>{t("user.terms.3.text2")}</p>

				<h3
					style={{
						marginTop: theme.spacers[10],
						marginBottom: theme.spacers[4],
					}}>
					{t("user.terms.4.title")}
				</h3>
				<p>{t("user.terms.4.text1")}</p>

				<h3
					style={{
						marginTop: theme.spacers[10],
						marginBottom: theme.spacers[4],
					}}>
					{t("user.terms.5.title")}
				</h3>
				<p>{t("user.terms.5.text1")}</p>
				<ol>
					<li>{t("user.terms.5.text2")}</li>
					<li>{t("user.terms.5.text3")}</li>
					<li>{t("user.terms.5.text4")}</li>
					<li>{t("user.terms.5.text5")}</li>
				</ol>
				<p>{t("user.terms.5.text6")}</p>
				<p>{t("user.terms.5.text7")}</p>
			</div>
		</SectionContainer>
	);
};

export default MainSection;
