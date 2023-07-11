import React from 'react';
import Headroom from 'react-headroom'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'; // sidebar menu
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';

const Header = () =>{

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return(
		<Headroom>
			<section className="header">
				<h1 className="header-title">Storm <br />Brainer</h1>
				<p className="header-caption"></p>
				<Button className="header-button" variant="primary" onClick={handleShow}>
					Your creativity start here
				</Button>

				<Offcanvas show={show} onHide={handleClose}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Filters</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<p>
						Some text as placeholder. In real life you can have the elements you
						have chosen. Like, text, images, lists, etc.<br/><br/>
						</p>
						<Form>
						<Form.Select size="sm">
							<option>Size</option>
						</Form.Select>
						<br />
						<Form.Select size="sm">
							<option>Select</option>
						</Form.Select>
						<br />
						<Form.Select size="sm">
							<option>Small select</option>
						</Form.Select>
						<br />
						<Form.Control type="email" placeholder="Enter email" />
						<br />
						<Form.Control type="password" placeholder="Password" />
						<br />
						<input type="color" />
	

						</Form>
						
					</Offcanvas.Body>
				</Offcanvas>
			</section>
		</Headroom>
	)
}

export default Header;