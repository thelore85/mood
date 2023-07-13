import React from 'react';
import './Image.css';

const Image = ({ src, onImgLoad }) => {
	return(
	<div>
		<img className="image-item test" src={src} onLoad={onImgLoad}/>
	</div>
	)
}

export default Image;
