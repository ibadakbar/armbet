import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

import theme from "../../theme";
import { getLeaderboard as gl } from "../../state/reducer";
import SectionContainer from "../../containers/SectionContainer";
import Leaderboard from "../../elements/Leaderboard";
import TextBlock from "../../elements/TextBlock";
import Icon from "../../components/Icon";
var currentPage = 1;

class MainSection extends React.Component {
	state = {
		showContent: false,
		currentTab: 0,
		users: [],
	};

	componentDidMount() {
		console.log("getUsers");
		if (!this.state.showContent) this.getUsers();
	}

	componentWillReceiveProps(nextProps) {
		this.getUsers();
	}

	getUsers = async (page, tab) => {
		console.log("--getUsers---");
		const { getLeaderboard } = this.props;
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const { currentTab } = this.state;
		console.log("tab before : ", tab);
		console.log("tab === 1 : ", tab === 1);
		if (tab !== 0 && tab !== 1) {
			tab = currentTab;
		}
		console.log("tab : ", tab);
		if (!page) page = Number(urlParams.get("page")) || 1;
		console.log("page : ", page);
		currentPage = page;
		this.setState({ showContent: false, users: [] });
		try {
			var response = await getLeaderboard(
				page,
				tab === 1 ? "coins" : "matches"
			);
		} catch (err) {
			console.log("err : ", err);
		}
		console.log("response : ", response);
		if (response) this.setState({ showContent: true, users: response });
		else this.setState({ showContent: true });
		window.scrollTo(0, 0);
	};

	onChangeTab = (val) => {
		this.setState({ currentTab: val });
		console.log("val : ", val);
		this.getUsers(null, val);
	};

	render() {
		const {
			fullscreen,
			minFullscreen,
			bgColor,
			vPadding,
			style,
			t,
		} = this.props;
		const { users, currentTab, showContent } = this.state;
		return (
			<SectionContainer
				fullscreen={fullscreen}
				minFullscreen={minFullscreen}
				bgColor={bgColor}
				vPadding={vPadding}
				style={style}>
				<TextBlock
					maxWidth="800px"
					titleElement={{
						text: t(theme.content.leaderboard.title),
						type: "h2",
					}}
					textElement={{
						text: t(theme.content.leaderboard.text),
						size: 1,
					}}></TextBlock>
				{showContent ? (
					<Leaderboard
						t={t}
						theme={theme}
						users={users}
						tab={currentTab}
						onClickTab={this.onChangeTab}
						page={currentPage}
						paginate={100}
						totalAmount={10000}
						onPressNext={(page) => this.getUsers(page)}
						onPressPrevious={(page) => this.getUsers(page)}
					/>
				) : (
					<Icon
						iconStyle={{ height: "50px", marginTop: 30 }}
						icon={theme.inlineLoader}
					/>
				)}
			</SectionContainer>
		);
	}
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
	return {
		getLeaderboard: (page, tab) => dispatch(gl(page, tab)),
	};
}
export default withTranslation()(
	connect(mapStateToProps, mapDispatchToProps)(MainSection)
);
