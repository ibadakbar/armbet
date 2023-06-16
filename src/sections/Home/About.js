import React, { useContext } from 'react';
import { themeContext } from '../../theme/Provider';
import SectionContainer from "../../containers/SectionContainer";
import TextBlock from "../../elements/TextBlock";
import { useTranslation } from "react-i18next";

const AboutSection = ({ data, fullscreen, bgColor, vPadding, style }) => {

  const theme = useContext(themeContext);
  const { t } = useTranslation();


  return (
    <SectionContainer fullscreen={fullscreen} bgColor={bgColor} vPadding={vPadding} style={style}>
            <TextBlock 
                centered
                maxWidth="800px"
                containerStyle={{margin: "auto"}}
                titleElement={{text:t(theme.content.about.title),type:"h2"}} 
                textElement={{text:t(theme.content.about.text),size:1}}

            ></TextBlock>
    </SectionContainer>
  );
};




export default AboutSection;