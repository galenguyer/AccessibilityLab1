import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { BOX_UNOPENED, BOX_INCORRECT, BOX_CORRECT, BOX_REVEALED, BOX_LOCKED } from '../../../reducers/game/Constants';

class Box extends Component {
	handleClick() {
		const { state } = this.props;

		if (state === BOX_UNOPENED || state === BOX_REVEALED) this.props.onClickHandler(this.props.number);
	}

	render() {
		const { number, state } = this.props;
		const classes = classNames({
			box: true,
			'box--green': state === BOX_CORRECT,
			'box--red': state === BOX_INCORRECT,
			'box--glow': state === BOX_REVEALED,
			'box--locked': state === BOX_LOCKED
		});

		return (
			<button className={classes} onClick={this.handleClick.bind(this)}>
				{number}
			</button>
		);
	}
}

export default Box;
