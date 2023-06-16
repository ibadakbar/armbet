import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import theme from '../theme';
import "../theme/font-faces.css";
import MainSection from '../sections/Success/Main';
import '../i18n';
import SEO from "../components/seo";
const smoothscroll = typeof window !== `undefined` ? require("smoothscroll-polyfill") : null;


const SignUpSuccess = ({ data, location }) => {
  if (typeof window !== 'undefined') {
    window.__forceSmoothScrollPolyfill__ = true;
    smoothscroll.polyfill();
  }
  const { t } = useTranslation();
  return (
    <div>
        <SEO title={t("headline")} url="" />
        <MainSection data={data} fullscreen={true} vPadding="0px" style={{paddingTop:theme.spacers[14]}}/>
    </div>
  )
}

export const data = graphql`
  query successBG {
    successBG: file(relativePath: { eq: "arm_wrestling_2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp,
          
        }
      }
   },
  }
`

export default SignUpSuccess

