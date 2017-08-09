import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './App.css';



class Stopwatch extends Component{

	constructor(props){
		super(props)

		this.state= {
			deadline:0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			intervalId: 0,
			on: false
		}
	}
	
	leading0(num){
		
		return num < 10 ? '0' + num :  num;
	}
	optionMaker(num){
		let options = [];

		for (let x = 0; x < num; x++){
			options.push(<option>{x}</option>)
		}
		return options;
	}
	changeStop(){

		const stop = Date.parse(new Date()) + (this.state.hours*60*60*1000)  + (this.state.minutes*60*1000) + (this.state.seconds*1000);
		
		this.setState({
				on: true,
				deadline: stop,
				intervalId:setInterval(()=> this.getTimeUntil(this.state.deadline),1000)
			});
		}	
		
	
	
	getTimeUntil(deadline){
		const time = deadline - Date.parse(new Date());

		const seconds = Math.floor((time/1000)%60);
		const minutes = Math.floor((time/1000/60)%60);
		const hours = Math.floor((time/(1000*60*60))%24);
		


		this.setState({
			
			minutes,
			hours,
			seconds
		});

		if(time == 0){
			this.stopWatch();
			alert("Your timer has ended!");
		}

	}
	startOrStop(){
		if(this.state.on){
			this.stopWatch();
		}
		else{
			this.changeStop();
		}
	}
	resetStop(){
		this.setState({
			hours:0,
			minutes: 0,
			seconds: 0

		});
	}
	stopWatch(){
		clearInterval(this.state.intervalId);
		this.setState({
			on: false
		})
	}
	render(){
		return(
			<div>
			<div>
				
				<div className = "Clock-hours-sw">{this.leading0(this.state.hours)} Hours</div>
				<div className = "Clock-minutes-sw">{this.leading0(this.state.minutes)} Minutes</div>
				<div className = "Clock-seconds-sw">{this.leading0(this.state.seconds)} Seconds</div>
				<Button onClick={()=> this.startOrStop()}>Start/Stop</Button>
				<Button onClick={()=> this.resetStop()}>Reset</Button>
			</div>
			<div>
				
				 <select name="Hours" form="Hours" onChange= {(event)=> this.setState({hours: event.target.value}) } className="Stopwatch-select" id="sel2">
				    <option selected disabled>Hours</option>
				    {this.optionMaker(25)}
				 </select>
				 <select onChange= {(event)=> this.setState({minutes: event.target.value}) } className="Stopwatch-select" id="sel3">
				 	<option selected disabled>Minutes</option>
				    {this.optionMaker(61)}
				 </select>
				 <select onChange= {(event)=> this.setState({seconds: event.target.value}) } className="Stopwatch-select" id="sel4">
				 	<option selected disabled>Seconds</option>
				    {this.optionMaker(61)}
				 </select>
			</div>
			</div>
		)
	}

}

export default Stopwatch;