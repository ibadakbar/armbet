import React, { useRef } from "react";
import theme from "../theme";
import HeroSection from "../sections/Home/Hero";
import FeaturesSection from "../sections/Home/Features";
import AboutSection from "../sections/Home/About";
import SignUpSection from "../sections/Home/SignUp";
import ComingSoonSection from "../sections/Home/ComingSoon";
import { graphql } from "gatsby";
import "../theme/font-faces.css";
import "../theme/layout.css";
import "../i18n";
import SEO from "../components/seo";
import { useTranslation } from "react-i18next";
const smoothscroll =
	typeof window !== `undefined` ? require("smoothscroll-polyfill") : null;

const IndexPage = ({ data }) => {
	if (typeof window !== "undefined") {
		window.__forceSmoothScrollPolyfill__ = true;
		smoothscroll.polyfill();
	}

	const { t } = useTranslation();

	/* CREATED REFS FOR SCROLLING */
	const signUpRef = useRef(null);
	const aboutRef = useRef(null);
	const comingSoonRef = useRef(null);
	theme.content.signUp.ref = signUpRef;
	theme.content.about.ref = aboutRef;
	theme.content.comingSoon.ref = comingSoonRef;

	return (
		<>
			<SEO
				title={t("headline")}
				url=""
				description={t("headlineText")}
				meta={[
					{
						name: `keywords`,
						content:
							"armwrestling, partner, find, app, mobile, events",
					},
				]}
			/>
			<HeroSection data={data} fullscreen vPadding="0px" />
			<FeaturesSection
				bgColor={theme.colors.color3}
				data={data}
				features={theme.content.features}
			/>
			<div style={{ height: theme.spacers[16] }} ref={aboutRef}></div>
			<AboutSection data={data} vPadding={"0px"} />
			<div
				style={{ height: theme.spacers[16] }}
				ref={comingSoonRef}></div>
			<ComingSoonSection data={data} vPadding={"0px"} />
			<div style={{ height: theme.spacers[15] }}></div>
			<div style={{ height: theme.spacers[12] }} ref={signUpRef}></div>
			<SignUpSection
				data={data}
				vPadding={"0px"}
				style={{ marginBottom: theme.spacers[5] }}
			/>
		</>
	);
};

export const data = graphql`
	query HeaderImageQuery {
		mobile: file(relativePath: { eq: "mobile.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000, quality: 70) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		mobile2: file(relativePath: { eq: "mobile2.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000, quality: 70) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		heroBG: file(relativePath: { eq: "arm_wrestling.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000, quality: 70) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		heroBG2: file(relativePath: { eq: "hero_bg_2.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000, quality: 70) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		events: file(relativePath: { eq: "events.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000, quality: 70) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

export default IndexPage;
