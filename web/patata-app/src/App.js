import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		// use let, not var
		let array = [1, 2 , 3].join(', ');
		// const is ok
		const person = {
			name: 'Josh',
			tick() {
				console.log(this)
			}
		}
		const dog = {
			eat() {
				setTimeout(() => {
					console.log(this);
				}, 1000);
			}
		}
		return (
			<div>
				<div className='header'>
					wa
				</div>
				<div className='body'>
					{array}
					<button onClick={() => person.tick()}>Show person</button>
					<button onClick={() => dog.eat()}>Dog eats</button>
				</div>
			</div>
		);
	}
}

export default App;
