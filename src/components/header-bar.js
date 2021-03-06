import React from 'react';
import {connect} from 'react-redux';

import './styles/header-bar.css';


import {clearAuth} from '../actions/auth';

export class HeaderBar extends React.Component {
	logOut() {
		this.props.dispatch(clearAuth());
	}

	render() {
		// Only render the log out button if we are logged in
		let logOutButton;
		if (this.props.loggedIn) {
			logOutButton = (
				< button className = 'logout-button'
					onClick = {
				    () => this.logOut()
					} > Log out < /button>
			);
		}
		return (
			<div className="header-bar">
				<header><h1>Mandarin Manual</h1></header>
				{logOutButton}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
