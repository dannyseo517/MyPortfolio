import React, {Component} from 'react';

const lol = {
	margin: 0
}
var lastScrollPos = 0;

class Index extends Component{
	constructor(props){
		super(props);
	}
	handleScroll(event){
		if(lastScrollPos < window.pageYOffset){
			console.log('scroll down');
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
				<div style={{margin:'1000px'}}>fuckk</div>
				<div>lol</div>
			</div>
		)
	}
}

export default Index;