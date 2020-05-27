import React, { Component } from 'react';

/**
 * See the component below? there are 4 fields: name, restaurant, meal and desert.
 * Once the user changes the form, it should be reflected on the "Your reservation" paragraph.
 */

class FoodPicker extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			restaurant: 'Frangelico',
			favMeal: '',
			addDesert: ''

		};
	}

	addName(e) {
		this.setState({
			name: e.target.value
		})
	}

	chooseRestaurant(e) {
		this.setState({
			restaurant: e.target.value
		})
	}

	favoriteMeal(e){
		this.setState({
			favMeal: e.target.value
		})
	}

	wantsDesert(e){
		if(e.target.checked === true){
			this.setState({
				addDesert: 'Additionally, our chef will make a special desert for you!'
			});
		}else{
			this.setState({
				addDesert: ''
			});
		}
	}

	render() {
		return (
			<div>
				<h1>Order special meal:</h1>
				<div>
					Your name:
					<input type="text" onChange={this.addName.bind(this)}/>
				</div>
				<div>
					Choose restaurant:
					<select value={this.state.restaurant} onChange={this.chooseRestaurant.bind(this)}>
						<option value="Frangelico">Frangelico</option>
						<option value="Mina Tomei">Mina Tomei</option>
						<option value="Rak Basar">Rak Basar</option>
						<option value="Texas BBQ">Texas BBQ</option>
					</select>
				</div>
				<div>
					Favorite meal:
					<input type="text" onChange={this.favoriteMeal.bind(this)}/>
				</div>
				<div>
					Want a desert?
					<input 
						type="checkbox" 
						checked={this.state.checked}
						onChange={this.wantsDesert.bind(this)}
					/>
				</div>

				<div>
					<h2>Your reservation:</h2>
					Hi {this.state.name}! <br />
					We are glad you want to reserve a table at {this.state.restaurant}.<br />
					We will make sure that your favorite meal, {this.state.favMeal} is available.<br />
					{this.state.addDesert}<br />
				</div>
			</div>
		);
	}
}

export default FoodPicker;