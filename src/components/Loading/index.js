import React from 'react';
import style from './style';
import { connect } from 'react-redux';

class Loading extends React.Component {

	render() {
		return (
			<div className={style.container} style={{display: this.props.loading ? this.props.loading.type === "global" ? "flex" : "none" : "none"}}>
				<div>
					<div className={style.loaderBall1+ " " + style.loader}/>
					<div className={style.loaderBall2+ " " + style.loader}/>
					<div className={style.loaderBall3+ " " + style.loader}/>
				</div>
			</div>
		);
	}
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.loading
    };
}

export default connect(mapStateToProps, null)(Loading);

