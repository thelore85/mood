import React from 'react';
import './Image.css';

const Image = ({ src, onImgLoad }) => {
	return(
		<figure>
		<img className="image-item" src={src} onLoad={onImgLoad}/>
		</figure>
	)
}

export default Image;
