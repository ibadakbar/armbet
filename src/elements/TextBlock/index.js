import React from 'react';
import styled from 'styled-components';
import theme from "../../theme";


var Title = styled.h4`
      ${props => (props.white ? 'color: "white"' : null)};
      margin-bottom: ${props => (props.verticalSpacing ? theme.spacers[props.verticalSpacing] : "5%")};
      margin-top:${props => (props.verticalSpacing ? theme.spacers[props.verticalSpacing] : (props.topElement ? "5%" : 0))};
      ${props => (props.titleElement.size ? ("font-size: " + theme.fontSizes[props.titleElement.size] + ";") : null) }
      ${props => (props.titleElement.style)}
`;

var Text = styled.p`
      ${props => (props.white ? 'color: "white"' : null)};
      margin-bottom: ${props => (props.verticalSpacing ? theme.spacers[props.verticalSpacing] : (props.button ? "5%" : 0))};
      ${props => ("font-size: " + (props.textElement.size ? theme.fontSizes[props.textElement.size] : theme.fontSizes[1]) + ";" )}
      ${props => (props.textElement.style)}
      @media (min-width: 768px) {
        ${props => ("font-size: " + (props.textElement.size ? theme.fontSizes[props.textElement.size] : theme.fontSizes[0]) + ";" )}
      }
  `;
  



const TextBlock = (props) => {

  const { titleElement, textElement, centered, button, topElement, minHeight, containerStyle, className, maxWidth, minWidth, horizontalPadding, verticalPadding } = props;
  return (
    <div className={className ? " "+className : ""} style={{
        ...containerStyle,
        textAlign: centered ? "center" : null,
        display: centered ? "flex" : null,
        flexDirection: centered ? "column" : null,
        alignItems: centered ? "center" : null,
        maxWidth: maxWidth || null,
        minWidth: minWidth || null,
        minHeight: minHeight || null,
        paddingLeft: horizontalPadding || null,
        paddingRight: horizontalPadding || null,
        paddingTop: verticalPadding || null,
        paddingBottom: verticalPadding || null,
    }}>
        {topElement ? topElement() : null}
        {titleElement ? <Title as={titleElement.type} {...props}>{titleElement.text}</Title> : null}
        {textElement ? <div>
          <Text text={textElement} {...props} >{textElement.text}</Text>
          {textElement.text2 ? <Text text={textElement} {...props} >{textElement.text2}</Text> : null}
        </div> : null}
        {button ? button() : null}
    </div>
  );
};


export default TextBlock;