import React, { Component, Fragment } from 'react';
import {navigate} from "@reach/router";

class GameButtons extends Component {
	render() {
		const {
			plays,
			visible,
			repairApplied,
			openRepairHandler,
			openInstructionsHandler,
			startGameHandler
		} = this.props;
		const startMessage = repairApplied ? 'Start with Repair Applied' : 'Start';
		const repairButton = (
			<button className="button" onClick={openRepairHandler} key="repair">
				Repair
			</button>
		);
		const instructionsButton = (
			<button className="button" onClick={openInstructionsHandler} key="instructions">
				How to Play?
			</button>
		);
		const startButton = (
			<button className="button button--green" onClick={startGameHandler} key="start">
				{startMessage}
			</button>
		);
		const quizButton = (
			<button className="button button--blue" onClick={()=>navigate(process.env.PUBLIC_URL+'/Quiz')} key="Quiz">
				Quiz
			</button>
		);
		const buttons = [];

		if (!visible) return null;

		if (plays >= 2) buttons.push(repairButton);
		if (plays === 0) buttons.push(instructionsButton);
		if (plays === 0) buttons.push(quizButton);
		buttons.push(startButton);

		return <Fragment>{buttons}</Fragment>;
	}
}

export default GameButtons;
