import React from "react";
import theme from '../theme';
import "../theme/font-faces.css";
import MainSection from '../sections/TermsAndConditions/Main';
import '../i18n';
import SEO from "../components/seo";
import { useTranslation } from "react-i18next";

const TermsAndConditions = ({ data, location }) => {
    const { t } = useTranslation();
    return (
    <>
        <SEO title={"Armbet - " + t("userterms")} url="terms-and-conditions" description={"These terms and conditions outline the rules and regulations for the use of Armbet, Inc's Website."} meta={[{
          name: `keywords`,
          content: "armwrestling, terms and conditions",
        }]}/>
        <MainSection data={data} vPadding={theme.spacers[10]}/>
    </>
  )
}

export default TermsAndConditions

