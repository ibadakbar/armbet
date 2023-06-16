import React, { useContext } from 'react';
import { themeContext } from '../../theme/Provider';
import SectionContainer from "../../containers/SectionContainer";
import TextBlock from "../../elements/TextBlock";
import Img from 'gatsby-image';
import Button from "../../components/Button";
import { navigate } from "gatsby";
import { useTranslation } from "react-i18next";

const MainSection = ({ data, fullscreen, bgColor, vPadding, style }) => {

    const { t } = useTranslation();
    const theme = useContext(themeContext);

    return (
        <SectionContainer fullscreen={fullscreen} bgColor={bgColor} vPadding={vPadding} style={style}>
                <TextBlock 
                    centered
                    maxWidth="800px"
                    containerStyle={{margin: "auto"}}
                    titleElement={{text:t(theme.content.signUpSuccess.title),type:"h1"}} 
                    textElement={{text:t(theme.content.signUpSuccess.text),size:1}}
                ></TextBlock>
                <div className="col-center" style={{position: "relative"}}>

                <Img fluid={data.successBG.childImageSharp.fluid} alt="Background image" loading="eager" fadeIn={false}  placeholderStyle={{ visibility: "hidden", border: "none", outline: "none" }} style={{width: "80%",minWidth:500,maxWidth:1300,position:"absolute",zIndex:theme.zIndex.background2 }}/>
                </div>

        </SectionContainer>
    );
};




export default MainSection;