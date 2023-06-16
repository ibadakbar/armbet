import React from "react";
import theme from '../theme';
import "../theme/font-faces.css";
import MainSection from '../sections/PrivacyPolicy/Main';
import '../i18n';
import SEO from "../components/seo";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = ({ data, location }) => {
    const { t } = useTranslation();
    return (
    <>
        <SEO title={"Armbet - " + t("privacypolicy")} url="privacy-policy" description={t("privacypolicy.1.text1")} meta={[{
          name: `keywords`,
          content: "armwrestling, privacy policy",
        }]}/>
        <MainSection data={data} vPadding={theme.spacers[10]}/>
    </>
  )
}

export default PrivacyPolicy

