import React, { useContext } from 'react';
import { themeContext } from '../../theme/Provider';
import SectionContainer from "../../containers/SectionContainer";
import Row from "../../containers/Row";
import TextBlock from "../../elements/TextBlock";
import Icon from "../../components/Icon";
import { useTranslation } from "react-i18next";
import { css } from 'glamor';


var iconContainerStyle = css({
  padding:"40px",
  '@media(max-width: 768px)': {
    padding:"30px",
  }
});

var iconStyle = css({
  height: "70px",
  '@media(max-width: 768px)': {
    height: "60px",
  }
});

const FeaturesSection = ({ data, fullscreen, features, bgColor, vPadding, style }) => {
  const theme = useContext(themeContext);
  const { t } = useTranslation();



  return (
    <SectionContainer fullscreen={fullscreen} bgColor={bgColor} vPadding={vPadding} style={style}>
        <Row justify={"space-between"} align="flex-start" mobileCenter>
            {features.map((feature, index) => (
                <TextBlock 
                key={index}
                centered
                titleElement={{text:t(feature.title),type:"h4",style:"margin-top:"+theme.spacers[3]}} 
                maxWidth="25%"
                minWidth={300}
                minHeight={"280px"}
                verticalPadding={"20px"}
                textElement={{text:t(feature.text),style:"max-width:80%"}}
                topElement={() => (
                        <Icon 
                        containerShadow="rgba(0, 0, 0, 0.2) 0px 10px 16px" 
                        bgColor={theme.colors.color2} 
                        iconClassName={iconStyle}
                        className={iconContainerStyle}
                        round 
                        hoverStyle={`
                        transform: translateY(-10px);
                        `}
                        icon={feature.img} 
                        />
                    )}
                    ></TextBlock>
            ))}
        </Row>
    </SectionContainer>
  );
};




export default FeaturesSection;