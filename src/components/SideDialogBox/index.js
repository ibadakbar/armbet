import React from 'react';
import style from './style';
import theme from "../../theme";
import Button from '../../components/Button';
import { toggleSideDialogBox } from "../../state/reducer";
import { connect } from 'react-redux';
import TextBlock from '../../elements/TextBlock';
import { withTranslation } from "react-i18next";

class SideDialogBox extends React.Component {
	
	hideMessageBox = () => {
		this.props.toggleSideDialogBox(false);
	}

	render() {
		const { showSideDialog, t } = this.props;
		return (
			<div className={style.sideDialogBox} style={{display: showSideDialog ? "flex" : "none"}}>
				<TextBlock 
					titleElement={{text:showSideDialog?  t(showSideDialog.title) : "",type:"h4"}} 
					textElement={{text:showSideDialog?  t(showSideDialog.text) : ""}}
            	/>
				<div style={{ display: "flex",marginTop: theme.spacers[3] }}>
					<Button href={showSideDialog ? showSideDialog.href1 || "" : ""} onClick={() => {}}>{showSideDialog ? t(showSideDialog.button1) || t("contactus") : t("contactus")}</Button>
					<Button href={showSideDialog ? showSideDialog.href2 || "" : ""} isText color={theme.colors.color2ShadeUp[5]} style={{marginLeft: theme.spacers[4] }} onClick={this.hideMessageBox}>{showSideDialog ? t(showSideDialog.button2) || t("nothanks") : t("nothanks")}</Button>
				</div>
				
			</div>
		);
	}
};

function mapStateToProps(state, ownProps) {
    return {
        showSideDialog: state.showSideDialog
    };
}

function mapDispatchToProps(dispatch) {
	return {
		toggleSideDialogBox: (val) => dispatch(toggleSideDialogBox(val))
	};
};

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(SideDialogBox));




/*import React from "react";

import { withRouter } from "react-router";
import { connect } from "react-redux";
import { resetMessage } from "../../actions";
import "./style.css";

class HRMessageBox extends React.Component {
	renderBox = () => {
		if (this.props.message) {
			document.body.style["overflow-y"] = "hidden";
			return (
				<div
					onClick={() => {
						this.props.onResetMessage();
					}}
					style={{
						position: "fixed",
						zIndex: 999999,
						height: "100vh",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						width: "100vw",
						backgroundColor: "rgba(0, 0, 0, 0.5)"
					}}
				>
					<div className="box">
						<h2>Message</h2>
						<p style={{ width: "90%", fontSize: 19, textAlign: "center" }}>
							{this.props.message}
						</p>
						<button className="ok-button">OK !</button>
					</div>
				</div>
			);
		} else {
			document.body.style["overflow-y"] = "visible";
			return null;
		}
	};

	render() {
		return this.renderBox();
	}
}

const mapStateToProps = state => ({
	message: state.OtherReducer.message
});

const mapDispatchToProps = dispatch => {
	return {
		onResetMessage: () => dispatch(resetMessage())
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(HRMessageBox)
);
*/