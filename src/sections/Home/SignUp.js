import React, { useContext } from "react";
import { themeContext } from "../../theme/Provider";
import SectionContainer from "../../containers/SectionContainer";
import TwoColumnLayout from "../../containers/TwoColumn";
import TextBlock from "../../elements/TextBlock";
import SignUpForm from "../../elements/SignUpForm";
import Img from "gatsby-image";
import { useTranslation } from "react-i18next";
import { css } from "glamor";

const SignUp = ({ data, fullscreen, bgColor, vPadding, style }) => {
	const formStyle = css({
		maxWidth: "47%",
		"@media(max-width: 768px)": {
			maxWidth: "100%",
		},
	});
	const theme = useContext(themeContext);
	const { t } = useTranslation();
	return (
		<SectionContainer
			fullscreen={fullscreen}
			bgColor={bgColor}
			vPadding={vPadding}
			style={style}>
			<TwoColumnLayout col={false}>
				<div className="desktop-and-tablet-only">
					{/* ADDED RIGHT BECAUSE OF SHADOW IN IMAGE*/}
					<Img
						fluid={data.mobile2.childImageSharp.fluid}
						alt="Sign up image"
						loading="eager"
						fadeIn={false}
						placeholderStyle={{
							visibility: "hidden",
							border: "none",
							outline: "none",
						}}
						objectFit="contain"
						imgStyle={{ maxHeight: "100%" }}
						style={{
							left: "-45px",
							width: "400px",
							alignSelf: "flex-start",
						}}
					/>
				</div>
				<div className={formStyle} style={{}}>
					<TextBlock
						titleElement={{
							text: (
								<span>
									{t("signUp.part1")}{" "}
									<span
										style={{ color: theme.colors.color1 }}>
										{t("signUp.part2")}
									</span>
								</span>
							),
							type: "h2",
						}}
						textElement={{
							text: t(theme.content.signUp.text),
							size: 1,
							style: "max-width: 570px;",
						}}></TextBlock>

					<SignUpForm
						vPadding={theme.spacers[4]}
						t={t}
						flexDirection={"row"}
					/>
				</div>
			</TwoColumnLayout>
		</SectionContainer>
	);
};

export default SignUp;
