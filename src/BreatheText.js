import React, { Component } from 'react';
import './BreatheText.css';

const totalTime = 20000
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

class BreatheText extends Component {
	constructor() {
		super();
		this.state = { 
			breatheText: 'Breathe In',
			counter: 0,
			toggleClass: true
		}
	}

	textCycle() {
		this.setState({ 
			breatheText: 'Breathe In',
			counter: 1,
			toggleClass: true
		 })

		setTimeout(() => {
			this.setState({ 
				breatheText: 'Hold',
				counter: 1 
			})
			
			setTimeout(() => {
				this.setState({ 
					breatheText: 'Breathe Out',
					counter: 1,
					toggleClass: false
				 })
			}, holdTime)
		
		}, breatheTime)		
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({ counter: this.state.counter + 1 })
		}, 1000)

		this.textCycle()

		setInterval(() => {
			this.textCycle()
		}, totalTime)
	}

	render() {
		let dialation = this.state.toggleClass ? "grow" : "shrink";

		return (
  		<div className={"container " + dialation}>
				<div className = "outerCircleClass"></div>
				<div className = "innerCircleClass"></div>
				<div className = "breatheText">
					<p>{this.state.breatheText}</p>
					<p>{this.state.counter}</p>
				</div>
				<div className = "pointer-container">
	    		<div className = "pointer"></div>
	    	</div>
    	</div>
		);
	}
}

export default BreatheText;
