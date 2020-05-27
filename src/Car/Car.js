import React, { Component } from 'react';
import './Car.css';

/**
 * Your task:
 * When the user chooses a color from the list,
 * you should change the element `Car-color` background color accordingly.
 */

class Car extends Component {

	constructor(props) {
		super(props);
		this.state = {
			carColor: 'silver'
		};
	}

	changeColor(event) {
		this.setState({
			carColor: event.target.value
		});
	  }

	render() {
		return (
			<div>
				<h1>Choose a color for your car:</h1>
				<select value={this.state.carColor} onChange={this.changeColor.bind(this)}>
					<option value="silver">silver</option>
					<option value="red">red</option>
					<option value="blue">blue</option>
					<option value="yellow">yellow</option>
					<option value="green">green</option>
				</select>
				<br />
				<br />
				<div className="Car-color" style={{backgroundColor: this.state.carColor}}>Color example</div>
			</div>
		);
	}
}

export default Car;