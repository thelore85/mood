import React from 'react';
import Image from './Image';

import './ImageList.css';

const ImageList = ({ imgArray, onImgLoad, maximizeImage }) =>{

	let imgElementsArr
	let counter = imgArray.length;	
	if(counter > 0){
		imgElementsArr = imgArray.map((el, i )=>{
			return (
				<Image
					key={el+i}
					src={imgArray[i].urls}
					onImgLoad={onImgLoad}
					maximizeImage={maximizeImage}
				/> 
			)
		})
	}
	
	return(
	<div className="image-list">
		{imgElementsArr}
	</div>
	)
};

export default ImageList;