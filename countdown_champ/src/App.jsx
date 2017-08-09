import React, { Component } from 'react';
import Stopwatch from './Stopwatch.jsx'
import Clock from './Clock.jsx';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			deadline: 'December 25, 2017',
			newDeadline: '',
			input: '',
			value: ''
			
		}
	}

	changeDeadline() {
		this.setState({
			deadline: this.state.newDeadline,
			input: ''
		});
	}
	render(){
		return(
			<div className="App">
				<div className="App-title">Countdown to {this.state.deadline}</div>
				<div>
					<Clock  
					 deadline={this.state.deadline}/>
				</div>
				<Form inline>

					<FormControl //input for taking in a new date. Has class Deadline-input for styling. 
					className="Deadline-input"
					onChange={event => this.setState({newDeadline: event.target.value})}/>

					<Button onClick={()=>this.changeDeadline()}>Submit</Button>
				</Form>
				<hr/>
				<div className="Stopwatch-title">Stopwatch</div>
				<Stopwatch />
				
			</div>
		)
		
	}
}

export default App;