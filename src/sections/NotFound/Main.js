import React, { useContext } from 'react';
import { themeContext } from '../../theme/Provider';
import SectionContainer from "../../containers/SectionContainer";
import TextBlock from "../../elements/TextBlock";
import Button from "../../components/Button";
import { navigate } from "gatsby";
import trans from '../../i18n';

const MainSection = ({ data, fullscreen, bgColor, vPadding, style }) => {

  const theme = useContext(themeContext);

  return (
    <SectionContainer fullscreen={fullscreen} bgColor={bgColor} vPadding={vPadding} style={style}>
      <div className="col-center">
            <TextBlock 
                centered
                maxWidth="800px"
                verticalSpacing={6}
                titleElement={{text:trans.t(theme.content.notFound.title),size:11,type:"h2",style:"line-height: 0.7em;"}} 
                textElement={{text:trans.t(theme.content.notFound.text),size:1}}
                button={() => <Button size="large" onClick={() => {navigate("/");}} >{trans.t("backtohomepage")}</Button>}
            ></TextBlock>
            {/*<Img fluid={data.successBG.childImageSharp.fluid}  style={{width: "60%",minWidth:false ? 350 : 500,maxWidth:1300,position:"absolute",marginTop:150,zIndex:theme.zIndex.background2 }}/>*/}
      </div>

    </SectionContainer>
  );
};




export default MainSection;