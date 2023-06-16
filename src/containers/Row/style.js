import { css } from 'glamor';
import theme from "../../theme";

/**************************/
/***** ROW STYLE *****/
/**************************/

var container = css({
    display:"flex",
    width: "100%", 
    maxWidth: theme.maxWidth,
    flexWrap: "wrap",
    height:"100%",
    flexDirection: "row", 
    justifyContent: "space-between",
    alignItems: "center", 
    flexWrap: "wrap",
    '@media(max-width: 1020px)': {
        justifyContent: "center",
    },
    '@media(max-width: 768px)': {
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center", 
        flexWrap: "nowrap",
    }
});




var style = {
    container,
}


export default style;