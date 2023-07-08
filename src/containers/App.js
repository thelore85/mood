///////////////////////////////////////////
// IMOPRT AND VARIABLES

import React, { Component } from 'react';
import { imageDb } from '../Db.js'

import Header from '../components/Header.js'
import ImageList from '../components/ImageList.js';
import Loader from '../components/Loader.js';
import './App.css';

//COMPONENT VARIABLES
let loadingCounter = 0;
let count = 10;
let accessKey = 'UB47zzyZZUCV5oltzO136BivI1u1oOQiO96YF7UeB7U';
let temporaryArray = [];


//////////////////////////////////////////
//COMPONTENTS START
///////////////////////////////////////////

class App extends Component{
	
	// STATE setup
	constructor(){
		super()
		this.state = {
			imgArray:[],
			render: false,
		}
	};

// FETCHING IMG
getImagesFromApi(){
	// temporaryArray = temporaryArray.concat(imageDb)
	// this.setState({
	// 	imgArray: temporaryArray,
	// })

	fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`)
	.then(response => { return response.json()})
	.then(images => {	temporaryArray = temporaryArray.concat(images); this.setState({ imgArray: temporaryArray,})})

}

// INFINITE SCROLLING
handleScroll = () => {

let sum = window.innerHeight + window.scrollY ;
let body = document.body.offsetHeight -10;

if(sum >= body){
	this.setState({	render: false	});
	this.getImagesFromApi();
};
}

// HIDE/SHOW LOADING ANIMATION
onImgLoad = () => {
loadingCounter++;

if(loadingCounter >= count){
	this.setState({
		render: true
	});
	
	loadingCounter = 0;
	}
}

//COMPOPNENT DID MOUNT
componentDidMount(){
	this.getImagesFromApi()
	window.addEventListener('scroll', this.handleScroll);
}

// RENDER THE COMPONENTS and pass parameters
render(){

		return(		
			<div className="app-container" >
				<Header />
				<Loader  renderStatus={this.state.render}/>
				<ImageList renderStatus={this.state.render} onImgLoad={this.onImgLoad} imgArray={this.state.imgArray}/>
			</div>
		)
	}
}

export default App;
////////////////////////////////////////////////