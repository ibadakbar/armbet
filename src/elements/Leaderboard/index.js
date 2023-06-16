import React, { Component } from "react";
import { navigate, navigateTo } from "gatsby";

import "./style.css";
import Input from "../../components/Input";
import f from "../../resources/functions";

class Leaderboard extends Component {
	constructor(props) {
		super(props);

		this.sortUsersByScore = this.sortUsersByScore.bind(this);
		this.sortUsersByName = this.sortUsersByName.bind(this);
		this.filterRank = this.filterRank.bind(this);
		this.increasePage = this.increasePage.bind(this);
		this.decreasePage = this.decreasePage.bind(this);

		this.state = {
			users: this.props.users,
			ranking: [],
			asc: false,
			alph: false,
			page: 1,
			pageMax: 1,
		};
	}

	componentDidMount() {
		console.log("this.props.page : ", this.props.page);
		console.log("this.props.users : ", this.props.users);
		if (this.props.page) this.setState({ page: this.props.page });
		const ranking = this.state.users;
		const paginate = this.props.paginate;
		ranking.sort(this.compareScore).reverse();
		ranking.map(
			(user, index) =>
				(user.rank = index + 1 + (this.props.page - 1) * 100)
		);
		/*ranking.map(
			(user, index) => (user.page = Math.ceil((index + 1) / paginate))
		);*/
		ranking.map(
			(user, index) =>
				(user.page =
					Math.ceil((index + 1) / paginate) +
					(this.props.page - 1 || 0))
		);
		//this.setState({ pageMax: ranking[ranking.length - 1].page });
		this.setState({ pageMax: this.props.totalAmount });
		console.log("ranking : ", ranking);
		this.setState({ ranking: ranking });
	}

	compareScore(a, b) {
		if (a.amount < b.amount) return -1;
		if (a.amount > b.amount) return 1;
		return 0;
	}

	compareName(a, b) {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	}

	sortUsersByScore() {
		const ranking = this.state.ranking;
		const paginate = this.props.paginate;
		if (this.state.asc === true) {
			ranking.sort(this.compareScore).reverse();
			ranking.map(
				(user, index) => (user.page = Math.ceil((index + 1) / paginate))
			);
			this.setState({ ranking: ranking });
			this.setState({ asc: false });
			this.setState({ alph: false });
		} else {
			ranking.sort(this.compareScore);
			ranking.map(
				(user, index) => (user.page = Math.ceil((index + 1) / paginate))
			);
			this.setState({ ranking: ranking });
			this.setState({ asc: true });
			this.setState({ alph: false });
		}
	}

	sortUsersByName() {
		const ranking = this.state.ranking;
		const paginate = this.props.paginate;
		if (this.state.alph === true) {
			ranking.sort(this.compareName).reverse();
			ranking.map(
				(user, index) => (user.page = Math.ceil((index + 1) / paginate))
			);
			this.setState({ ranking: ranking });
			this.setState({ alph: false });
			this.setState({ asc: true });
		} else {
			ranking.sort(this.compareName);
			ranking.map(
				(user, index) => (user.page = Math.ceil((index + 1) / paginate))
			);
			this.setState({ ranking: ranking });
			this.setState({ alph: true });
			this.setState({ asc: true });
		}
	}

	filterRank(e) {
		const ranking = this.state.users;
		const paginate = this.props.paginate;
		const newRanking = [];
		const inputLength = e.target.value.length;
		for (var i = 0; i < ranking.length; i++) {
			const str = ranking[i].user.name
				.slice(0, inputLength)
				.toLowerCase();
			if (str === e.target.value.toLowerCase()) {
				newRanking.push(ranking[i]);
			}
		}
		newRanking.sort(this.compareScore).reverse();
		newRanking.map(
			(user, index) => (user.page = Math.ceil((index + 1) / paginate))
		);
		this.setState({ ranking: newRanking });
		this.setState({ page: 1 });
		this.setState({ pageMax: this.props.totalAmount });
	}

	increasePage(e) {
		let page = this.state.page;
		if (page < this.state.pageMax) {
			page += 1;
		}
		navigateTo("/leaderboard?page=" + page);
		if (this.props.onPressNext) {
			this.props.onPressNext(page);
		}
		//this.setState({ page: page });
	}

	decreasePage(e) {
		let page = this.state.page;
		if (page > 1) {
			page -= 1;
		}
		navigateTo("/leaderboard?page=" + page);
		if (this.props.onPressPrevious) {
			this.props.onPressPrevious(page);
		}
		//this.setState({ page: page });
	}

	goToProfile() {}

	render() {
		const { t, theme, tab, onClickTab } = this.props;
		return (
			<div>
				<form onChange={this.filterRank}>
					<Input
						type="search"
						name="search"
						placeholder={t("searchCurrentPage")}
						getOnChange={() => {}}
						textTransform="capitalize"
						required
						vPadding={theme.spacers[2]}
					/>
				</form>
				<div className="tab-bar">
					<div
						className="tab-container"
						onClick={() => onClickTab(0)}>
						<p
							style={{
								marginRight: 20,
								marginLeft: 20,
								color: !tab ? theme.colors.color1 : null,
							}}
							className="tab-text">
							Matches
						</p>
						{!tab ? (
							<div
								className="tab-bar-bar"
								style={{
									backgroundColor: theme.colors.color1,
								}}></div>
						) : null}
					</div>

					<div
						className="tab-container"
						onClick={() => onClickTab(1)}>
						<p
							className="tab-text"
							style={{
								color: tab ? theme.colors.color1 : null,
							}}>
							Coins
						</p>
						{tab ? (
							<div
								className="tab-bar-bar"
								style={{
									backgroundColor: theme.colors.color1,
								}}></div>
						) : null}
					</div>
				</div>
				<table className="leaderboard">
					<tbody className="ranking">
						<tr>
							<td
								className="rank-header sortScore rank-column"
								onClick={this.sortUsersByScore}>
								{t("rank")}
							</td>
							<td
								className="rank-header sortAlpha"
								onClick={this.sortUsersByName}>
								{t("user")}
							</td>
							<td
								className="rank-header align-right coins-column"
								onClick={this.sortUsersByScore}>
								{tab ? t("coins") : t("wins")}
							</td>
						</tr>
						{this.state.ranking.map((user, index) => (
							<tr
								onClick={() => {
									navigate("/profile?user=" + user.user._id);
								}}
								className="ranking"
								key={index}
								style={{
									backgroundColor:
										index % 2 === 0
											? theme.colors.color3ShadeUp[5]
											: "white",
								}}>
								{user.page === this.state.page ? (
									<td className="data rank-column">
										{user.rank}
									</td>
								) : null}
								{user.page === this.state.page ? (
									<td className="data user-column">
										<img
											alt="user-pic"
											src={f.getProfilePhoto(
												user?.user?.photo
											)?.uri}
											className="user-photo"
										/>
										<p className="user-column-name">
											{user?.user?.name}
											<span className="user-column-index">
												#{user?.user?.index}
											</span>
										</p>
									</td>
								) : null}
								{user.page === this.state.page ? (
									<td className="data align-right coins-column">
										{user?.amount}
									</td>
								) : null}
							</tr>
						))}
					</tbody>
				</table>
				<div className="bottom-section">
					<p
						className={
							"decrement" + (this.state.page === 1 ? " hide" : "")
						}
						onClick={this.decreasePage}>
						{"< " + t("previous")}
					</p>
					<div style={{ display: "flex" }}>
						{this.state.page === 1 ? null : (
							<p
								onClick={this.decreasePage}
								className="bottom-section-page">
								{this.state.page - 1}
							</p>
						)}
						<p className={"bottom-section-page selected-number"}>
							{this.state.page}
						</p>
						{this.state.page < this.state.pageMax ? (
							<p
								onClick={this.increasePage}
								className="bottom-section-page">
								{this.state.page + 1}
							</p>
						) : null}
						{this.state.page + 1 < this.state.pageMax ? (
							<p className="bottom-section-page">{"..."}</p>
						) : null}
					</div>
					<p className={"increment"} onClick={this.increasePage}>
						{t("next") + " >"}
					</p>
				</div>
			</div>
		);
	}
}
export default Leaderboard;
