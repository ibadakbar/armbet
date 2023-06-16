import React, { useContext } from 'react';
import { themeContext } from '../../theme/Provider';
import SectionContainer from "../../containers/SectionContainer";
import TwoColumnLayout from "../../containers/TwoColumn";
import TextBlock from "../../elements/TextBlock";
import Button from "../../components/Button";
import Img from 'gatsby-image';
import f from '../../resources/functions';
import trans from '../../i18n';
import { useTranslation } from "react-i18next";
import { css } from 'glamor';

const HeroSection = ({ data, fullscreen, bgColor, vPadding, style }) => {

  const theme = useContext(themeContext);
  const { t } = useTranslation();



  var bgImage = css({
    bottom: "-230px",
    '@media(max-width: 1020px)': {
      bottom: "-10vw",
    }
  });

  return (
    <SectionContainer  fullscreen={fullscreen} bgColor={bgColor} style={style} vPadding={vPadding}>
          <Img fluid={data.heroBG.childImageSharp.fluid} alt="Background image" loading="eager" className={bgImage} fadeIn={false} placeholderStyle={{ visibility: "hidden", border: "none", outline: "none" }} style={{width: "100%",maxWidth:1300,position:"absolute",right: 0,zIndex:theme.zIndex.background2 }}/>
          <TwoColumnLayout col={false}>
              <div className="col-8 hero-text-container">
                <TextBlock 
                  titleElement={{text:<span>{t("headline.part1")}<span style={{color:theme.colors.color1}}> {t("headline.part2")}</span></span>,type:"h1",size:8}} 
                  textElement={{text:t(theme.content.headlineText),size:1, style:"width: 100%" }}
                  button={() => <Button size="large" style={{marginBottom: theme.spacers[8]}} onClick={() => {f.scrollTo(theme.content.signUp.ref.current.offsetTop)}} >{trans.t("signup")}</Button>}
                ></TextBlock>
              </div>
              <div style={{width:"40%",height: "100%", display:"flex", justifyContent: "flex-end"}}>
                {/* ADDED RIGHT BECAUSE OF SHADOW IN IMAGE*/} 
                <Img fluid={data.mobile.childImageSharp.fluid} className="desktop-only" alt="Hero image" loading="eager" fadeIn={false}  placeholderStyle={{ visibility: "hidden", border: "none", outline: "none" }}  objectFit="contain" imgStyle={{maxHeight: "100%"}} style={{right: "-6px",width: "800px",alignSelf: "flex-end" }}/>
              </div>
          </TwoColumnLayout>
    </SectionContainer>
  );
};




export default HeroSection;