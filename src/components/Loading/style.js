import { css } from 'glamor';

/**************************/
/***** ICON STYLE *****/
/**************************/

var container = css({
    position: "fixed",
	zIndex: 9,
    top:0,
    left:0,
	height: "100vh",
	width: "100vw",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "rgba(0,0,0,0.9)",
	transition: "300ms all"
});

var loader = css({
	height: "15px",
    width: "15px",
    float: "left",
    margin: "0 5px",
    backgroundColor: "white",
    display: "block",
    borderRadius: "50%",
   transform: "scale(1)",
    opacity: 0.4
});

let blinkAndBulge = css.keyframes('blinkAndBulge', { // optional name
    '10%': {
        opacity: 1,
        transform: 'scale(1.4)'
    },
    '40%': {
        opacity: 0.4,
        transform: 'scale(1)'
    }
})

var loaderBall1= css({
    animationName: `${blinkAndBulge}`,
    animationDuration: "1s",
    animationDelay: "0.15s",
    animationIterationCount: "infinite"
});
var loaderBall2= css({
    animationName: `${blinkAndBulge}`,
    animationDuration: "1s",
    animationDelay: "0.30s",
    animationIterationCount: "infinite"
});
var loaderBall3= css({
    animationName: `${blinkAndBulge}`,
    animationDuration: "1s",
    animationDelay: "0.45s",
    animationIterationCount: "infinite"
});



var style = {
	container,
    loader,
    loaderBall1,
    loaderBall2,
    loaderBall3
}


export default style;