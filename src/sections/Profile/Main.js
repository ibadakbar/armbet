import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { css } from "glamor";
import { Link, navigate } from "gatsby";
import { connect } from "react-redux";

import { themeContext } from "../../theme/Provider";
import SectionContainer from "../../containers/SectionContainer";
import { getUser as gu } from "../../state/reducer";
import Row from "../../containers/Row";
import TextBlock from "../../elements/TextBlock";
import Icon from "../../components/Icon";
import Separator from "../../components/Separator";
import Button from "../../components/Button";

const MainSection = ({
	data,
	fullscreen,
	bgColor,
	minFullscreen,
	vPadding,
	style,
	getUser,
}) => {
	const { t } = useTranslation();
	const theme = useContext(themeContext);
	const [state, setState] = useState({ showContent: false, user: null });
	var gotUser = false;

	useEffect(() => {
		if (!gotUser && !state.showContent) fetchUser();
	});

	const fetchUser = async () => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const userParam = urlParams.get("user");
		if (!userParam) {
			navigate("/");
		}
		try {
			var response = await getUser(userParam);
		} catch (err) {
			console.log("err : ", err);
			navigate("/");
		}
		console.log("response : ", response);
		if (response) setState({ showContent: true, user: response });
		else setState({ showContent: true });
		gotUser = true;
	};

	var icon = css({
		marginRight: "15px",
		height: 25,
		"@media(max-width: 1020px)": {
			bottom: "-10vw",
		},
	});

	var profileImage = css({
		height: "100px",
		marginRight: 30,
		"@media(max-width: 1020px)": {
			marginRight: 0,
		},
	});

	var renderProfileElements = () => {
		if (!state.user) return;
		var profileElements = [
			{
				image: require("../../assets/images/profile.png"),
				text: t(state.user.gender),
			},
			{
				image: require("../../assets/images/hand.png"),
				text: t(state.user.arm),
			},
			{
				image: require("../../assets/images/star.png"),
				text: state.user.experience + " " + t("yearsexperience"),
			},
			{
				image: require("../../assets/images/pin.png"),
				text: state.user.address.split(", ").slice(-1),
			},
		];
		return profileElements.map((el) => (
			<div className="row-align-center">
				<img className={icon} src={el.image} alt="" />
				<TextBlock
					textElement={{
						text: el.text,
						size: 1,
						style: "margin:0;",
					}}
				/>
			</div>
		));
	};

	return (
		<SectionContainer
			fullscreen={fullscreen}
			minFullscreen={minFullscreen}
			bgColor={bgColor}
			vPadding={vPadding}
			style={style}>
			<Row justify={"center"} align="flex-start">
				<div
					style={{
						marginTop: 40,
						padding: 50,
						paddingTop: 20,
						backgroundColor: "white",
						borderRadius: 20,
						minWidth: "60%",
					}}>
					<Link to="/leaderboard">
						<p style={{ marginBottom: 20 }}>
							{"<  " + t("seeleaderboard")}
						</p>
					</Link>
					{state.showContent && state.user ? (
						<div className="col-align-center-tablet">
							<div className="row-align-center col-align-center-tablet">
								<Icon
									iconClassName={profileImage}
									round
									icon={require("../../assets/images/user_profile_placeholder.png")}
								/>
								<div>
									<TextBlock
										maxWidth="800px"
										titleElement={{
											text: "#" + state.user.index,
											type: "h5",
											style: "margin:0;margin-top:-10px;",
										}}
										vPadding={0}
									/>
									<TextBlock
										maxWidth="800px"
										titleElement={{
											text: state.user.name,
											type: "h2",
											style: "margin:0;margin-top:5px",
										}}
										vPadding={0}
									/>
								</div>
							</div>
							<div style={{ marginTop: 20 }}>
								{renderProfileElements()}
							</div>

							<TextBlock
								maxWidth="800px"
								textElement={{
									text:
										state.user.description ||
										t("nodescription"),
									size: 1,
									style:
										"margin-bottom:40px;margin-top:40px;",
								}}
							/>
							<Button size="large" href={""}>
								{t("seeonapp")}
							</Button>
						</div>
					) : (
						<Icon
							iconStyle={{ height: "50px", marginTop: 20 }}
							icon={theme.inlineLoader}
						/>
					)}
				</div>
			</Row>
		</SectionContainer>
	);
};

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
	return {
		getUser: (id) => dispatch(gu(id)),
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
