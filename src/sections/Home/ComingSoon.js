import React, { useContext } from 'react';
import { themeContext } from '../../theme/Provider';
import SectionContainer from "../../containers/SectionContainer";
import TwoColumnLayout from "../../containers/TwoColumn";
import TextBlock from "../../elements/TextBlock";
import Tag from '../../components/Tag';
import Img from 'gatsby-image';
import trans from "../../i18n";
import { useTranslation } from "react-i18next";

const SignUp = ({ data, fullscreen, bgColor, vPadding, style }) => {

  const theme = useContext(themeContext);
  const { t } = useTranslation();

  return (
    <SectionContainer fullscreen={fullscreen} bgColor={bgColor} vPadding={vPadding} style={style}>
        <TwoColumnLayout col={false} style={{alignItems:"center"}}>
            <div className="col-6">
                <TextBlock 
                titleElement={{text: <span>{t("comingSoon.part1")} <span style={{color:theme.colors.color1}}>{t("comingSoon.part2")}</span>{t("comingSoon.part3")}<span style={{color:theme.colors.color1}}>{t("comingSoon.part4")}</span>!</span>,type:"h2",style:"margin-top:"+theme.spacers[1]}} 
                textElement={{text:t(theme.content.comingSoon.text),text2: trans.exists(theme.content.comingSoon.text2) && t(theme.content.comingSoon.text2),size:1}}
                topElement={() => (<Tag style={{marginTop:theme.spacers[3]}}>{trans.t('comingsoon')}</Tag>)}
                ></TextBlock>
            </div>
            <Img className="desktop-only" alt="Events image" loading="eager" objectFit="contain" fadeIn={false}  placeholderStyle={{ visibility: "hidden", border: "none", outline: "none" }} fluid={data.events.childImageSharp.fluid} imgStyle={{width:"auto",maxWidth:"500px",height:'100%',maxHeight:"316px"}} style={{width:"40%",height:"100%",marginLeft:"60px"}} />
        </TwoColumnLayout>
    </SectionContainer>
  );
};




export default SignUp;