import React, {Component} from 'react';

const lol = {
	margin: 0
}
const menu = {
	left: '0px'
}
var lastScrollPos = 0;

class Index extends Component{
	constructor(props){
		super(props);
		this.state = {
			pos: 0
		}
		this.handleScroll = this.handleScroll.bind(this);
	}
	handleScroll(event){
		if(lastScrollPos < window.pageYOffset){
			console.log('scroll down');
			let _pos = this.state.pos + 1;
			this.setState({pos: _pos})
			console.log(this.state.pos);
		}else{
			console.log('scroll up');
		}
		lastScrollPos = window.pageYOffset;
	}
	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll);
	}
	render(){
		return(
			<div>
				<div style={{marginLeft: this.state.pos}}>this</div>
				<div style={{margin:'1000px'}}>fuckk</div>
				<div>lol</div>
			</div>
		)
	}
}

export default Index;