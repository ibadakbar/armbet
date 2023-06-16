import React from 'react';
import twoColStyle from "./style";

const TwoColumnLayout = ({ children, col, style }) => {


  return (
    <div className={twoColStyle.container} style={style ? { ...style, flexDirection:col ? "column" : "row"} : {flexDirection:col ? "column" : "row"} }>
        {children}
    </div>
  );
};


export default TwoColumnLayout;