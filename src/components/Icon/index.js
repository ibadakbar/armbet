import React from 'react';
import style from './style';
import styled from 'styled-components';
import theme from "../../theme";


const Div = styled.div `
  background-color: ${ props => (props.bgColor || "transparent")};
  transition: ${theme.buttons.transition};
  &:hover {
    transition: ${theme.buttons.transition};
    ${props => (props.hoverStyle)}

  }
`;


const Icon = (props) => {
  const { borderRadius, alt, padding, BottomElement, round, iconStyle, containerStyle, containerShadow, className, iconClassName, onClick, icon } = props;

  return (
    <div style={{...containerStyle}}>
    <Div {...props} className={style.container + (className ? " " + className : "") } style={{
        borderRadius: round ? "1000px" : (borderRadius || 0),
        cursor: onClick ? "pointer" : "default",
        padding: padding || null,
        boxShadow: containerShadow || "none",
    }} onClick={onClick ? onClick : null} >
          <img src={icon} alt={alt || ""} style={iconStyle} className={iconClassName ? " " + iconClassName : ""} />
    </Div>
      {BottomElement ? <BottomElement/> : null}
    </div>
  );
};



export default Icon;