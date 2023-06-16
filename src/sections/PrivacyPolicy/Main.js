import React, { useContext } from 'react';
import { themeContext } from '../../theme/Provider';
import SectionContainer from "../../containers/SectionContainer";
import { useTranslation } from "react-i18next";

const MainSection = ({ data, fullscreen, bgColor, vPadding, style }) => {
  const { t } = useTranslation();
  const theme = useContext(themeContext);

  return (
    <SectionContainer fullscreen={fullscreen} bgColor={bgColor} vPadding={vPadding} style={style}>
      <div style={{maxWidth: theme.maxWidth}}>
        <h1>{t("privacypolicy")}</h1>

        <p>{t("privacypolicy.1.text1")}</p>

        <p>{t("privacypolicy.1.text2")}</p>

        <p>{t("privacypolicy.1.text3")}</p>

        <h3 style={{marginTop:theme.spacers[10],marginBottom:theme.spacers[4]}}>{t("privacypolicy.2.title")}</h3>

        <p>{t("privacypolicy.2.text1")}</p>

        <h3 style={{marginTop:theme.spacers[10],marginBottom:theme.spacers[4]}}>{t("privacypolicy.3.title")}</h3>

        <p>{t("privacypolicy.3.text1")}</p>
        <p>{t("privacypolicy.3.text2")}</p>
        <p>{t("privacypolicy.3.text3")}</p>

        <h3 style={{marginTop:theme.spacers[10],marginBottom:theme.spacers[4]}}>{t("privacypolicy.4.title")}</h3>

        <p>{t("privacypolicy.4.text1")}</p>

        <ul>
        <li>{t("privacypolicy.4.text2")}</li>
        <li>{t("privacypolicy.4.text3")}</li>
        <li>{t("privacypolicy.4.text4")}</li>
        <li>{t("privacypolicy.4.text5")}</li>
        <li>{t("privacypolicy.4.text6")}</li>
        <li>{t("privacypolicy.4.text7")}</li>
        <li>{t("privacypolicy.4.text8")}</li>
        </ul>

        <h3 style={{marginTop:theme.spacers[10],marginBottom:theme.spacers[4]}}>{t("privacypolicy.5.title")}</h3>

        <p>{t("privacypolicy.5.text1")}</p>




        <h3 style={{marginTop:theme.spacers[10],marginBottom:theme.spacers[4]}}>{t("privacypolicy.6.title")}</h3>

        <p>{t("privacypolicy.6.text1")}</p>

        <p>{t("privacypolicy.6.text2")}</p>

        <p>{t("privacypolicy.6.text3")}</p>

        <h3 style={{marginTop:theme.spacers[10],marginBottom:theme.spacers[4]}}>{t("privacypolicy.7.title")}</h3>

        <p>{t("privacypolicy.7.text1")}</p>

        <p>{t("privacypolicy.7.text2")}</p>

        <h3 style={{marginTop:theme.spacers[10],marginBottom:theme.spacers[4]}}>{t("privacypolicy.8.title")}</h3>

        <p>{t("privacypolicy.8.text1")}</p>
        <p>{t("privacypolicy.8.text2")}</p>
        <p>{t("privacypolicy.8.text3")}</p>
        <p>{t("privacypolicy.8.text4")}</p>
        <p>{t("privacypolicy.8.text5")}</p>

        <h3 style={{marginTop:theme.spacers[10],marginBottom:theme.spacers[4]}}>{t("privacypolicy.9.title")}</h3>

        <p>{t("privacypolicy.9.text1")}</p>
        <p>{t("privacypolicy.9.text2")}</p>
        <p>{t("privacypolicy.9.text3")}</p>
        <p>{t("privacypolicy.9.text4")}</p>
        <p>{t("privacypolicy.9.text5")}</p>
        <p>{t("privacypolicy.9.text6")}</p>
        <p>{t("privacypolicy.9.text7")}</p>
        <p>{t("privacypolicy.9.text8")}</p>

        <h3 style={{marginTop:theme.spacers[10],marginBottom:theme.spacers[4]}}>{t("privacypolicy.10.title")}</h3>

        <p>{t("privacypolicy.10.text1")}</p>

        <p>{t("privacypolicy.10.text2")}</p>

      </div>
            
    </SectionContainer>
  );
};




export default MainSection;