import React from 'react';
import style from "./style";
import theme from '../../theme';

const Wrapper = props => {

  return (
    <div {...props} className={style.container + " " + (props.className || "")}>
      <div style={{maxWidth: theme.maxWidth,width:"100%",height: "100%", position: "relative"}}>

        {props.children}
      </div>
    </div>
  );
};


export default Wrapper;