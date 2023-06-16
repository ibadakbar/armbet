import { css } from 'glamor';
import theme from "../../theme";

/**************************/
/***** NAV BAR STYLE *****/
/**************************/

var container = css({
    width:"100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    height: "100%"
});

var languagesBox = css({
    position:"absolute", 
    marginTop: "-610px", 
    backgroundColor: "white", 
    minWidth: "180px", 
    maxWidth: "450px", 
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 16px"
});
var languageElement = css({
    ':hover': {
        backgroundColor: theme.colors.color3ShadeUp[2], 
    },
});


var navBarStyle = {
    container,
    languagesBox,
    languageElement
}


export default navBarStyle;