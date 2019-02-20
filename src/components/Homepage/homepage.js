import React, { Component } from 'react';
import heroVid from '../../resources/hero.mp4';
import './homepage.css';

export default class homepage extends Component {
	render() {
		return (
			<div className='homepage'>
				<div className='heroCover' />
				<div className='hero'>
					<video id='heroVid' autoPlay muted loop>
						<source src={heroVid} type='video/mp4' />
					</video>
				</div>
			</div>
		);
	}
}
