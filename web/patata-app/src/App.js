import React, { Component } from 'react';
import './App.css';
import Corgi, { eats } from './corgi';

class Person {
	constructor(name) {
		this.name = name;
	}

	talk () {
		console.log(this);
		return true;
	}
}

let person = new Person('Josh');
person.talk();
console.log(person.talk());

class Student extends Person {
	constructor(name, studentId) {
		super(name);
		this.studentId = studentId;
	}
}

let lulu = new Student('lulu', '123');
console.log(lulu)

let corgi = new Corgi('Thor');
console.log(corgi)
console.log(eats())

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
		// ()=>{} doesn't create 'this'
		const dog = {
			eat() {
				setTimeout(() => {
					console.log(this);
				}, 1000);
			}
		}
		// destructuring and spread syntax
		let colors = ['blue', 'red', 'green'];
		let missing_colors = ['orange'];
		let all_colors = [...colors, ...missing_colors].join(', ');

		// const red = jingleBells.red;
		// const blue = jingleBells.blue;
		// const orange = jingleBells.orange;
		let jingleBells = {
			red: 2,
			blue: 3,
			orange: 5
		}
		let newJingleBells = { ...jingleBells };
		console.log(newJingleBells)
		const { red, blue, orange } = jingleBells;

		return (
			<div>
				<div className='header'>
					wa
				</div>
				<div className='body'>
					<div>
						array: {array}
					</div>
					<div>
						colors: {all_colors}
					</div>
					<div>
						red: {red}
						<br />
						blue: {blue}
						<br />
						orange: {orange}
					</div>
					<button onClick={() => person.tick()}>Show person</button>
					<button onClick={() => dog.eat()}>Dog eats</button>
				</div>
			</div>
		);
	}
}

export default App;
