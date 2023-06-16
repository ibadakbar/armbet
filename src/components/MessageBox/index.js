import React from 'react';
import style from './style';
import Button from '../../components/Button';
import trans from "../../i18n";
import { toggleMessageBox } from "../../state/reducer";
import { connect } from 'react-redux';

class MessageBox extends React.Component {

	
	hideMessageBox = () => {
		this.props.toggleMessageBox(false);
	}

	render() {
		const { containerStyle, title, button, showMessage } = this.props;
		return (
			<div className={style.container} style={{...containerStyle, display: showMessage ? "flex" : "none", opacity: showMessage ? 1 : 0}}>
				<div className={style.messageBox} style={{opacity: showMessage ? 1 : 0}}>
					<div className="col-center">
						<h3 style={{marginBottom:15}}>{title || trans.t("message")}</h3>
						<p style={{ width: "90%", marginBottom:45, fontSize: 19, textAlign: "center" }}>
							{showMessage}
						</p>
					</div>
					<Button onClick={this.hideMessageBox}>{button || trans.t("close")}</Button>
				</div>
			</div>
		);
	}
};

function mapStateToProps(state, ownProps) {
    return {
        showMessage: state.showMessage
    };
}

function mapDispatchToProps(dispatch) {
	return {
		toggleMessageBox: (val) => dispatch(toggleMessageBox(val))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);




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