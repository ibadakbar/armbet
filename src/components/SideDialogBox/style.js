import { css } from 'glamor';
import theme from '../../theme';

/**************************/
/***** ICON STYLE *****/
/**************************/

var sideDialogBox = css({
	backgroundColor: "white",
	maxWidth: "500px",
	width: "70%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	padding: "25px 50px 25px 30px",
	borderRadius: "20px 0 0 20px",
	boxShadow: '0 10px 18px rgba(0,0,0,.25)',
	transition: "400ms all",
	position: "fixed",
	right: 0,
	top: theme.dialogBoxes.position === "top" ? "120px" : null,
	bottom: theme.dialogBoxes.position === "bottom" ? "50px" : null,
	'@media(max-width: 768px)': {
		transform: "scale(0.8)",
		transformOrigin: "bottom right",
		width: "110%",
		padding: "20px 25px 20px 25px",
		bottom: "19px"
	}

});



var style = {
	sideDialogBox
}


export default style;


/*.box {
	background-color: white;
	width: 25vw;
	min-width: 250px;
	height: 250px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-top: 30px;
	padding-bottom: 25px;
	border-radius: 10px;
}

.ok-button {
	cursor: pointer;
	align-self: center;
	outline: none;
	background: rgb(238, 238, 238);
	color: rgb(71, 71, 71);
	font-size: 17px;
	font-weight: 500;
	border-radius: 3px;
	border: none;
	width: 200px;
	height: 45px;
	border-radius: 500px;
	transition: all 200ms;
	box-shadow: 0px 5px 6px 0px rgba(68, 68, 68, 0.4);
}
.ok-button:hover {
	margin-top: 2px;
	width: 198px;
	height: 43px;
	transition: all 200ms;
	box-shadow: 0px 3px 5px 0px rgba(68, 68, 68, 0.4);
}
.ok-button:active {
	margin-top: 2px;
	width: 198px;
	height: 43px;
	transition: all 200ms;
	box-shadow: 0px 1px 0px 0px rgba(68, 68, 68, 0.4);
}
*/