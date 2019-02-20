import React, { Component } from 'react';
import heroVid from '../../resources/hero.mp4';
import arrow from '../../resources/arrow.png';
import './homepage.css';

const Cover = ({ show, onAboutClicked, aboutText }) => (
	<div
		style={{
			position: 'fixed',
			width: '100%',
			height: '100%',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: show
				? 'rgba(41, 41, 41, 0.85)'
				: 'rgba(41, 41, 41, 0.5)',
			transition: 'background-color 1s linear',
			zIndex: 2
		}}
	>
		<div
			className='heroText'
			style={{
				// visibility: show ? 'hidden' : 'visible',
				animationName: show ? 'fadeOut' : 'fadeIn',
				animationDuration: '0.7s',
				animationTimingFunction: 'ease-in-out',
				animationFillMode: 'forwards'
			}}
		>
			Marc Tse
		</div>
		<div
			className='heroText2'
			style={{
				// visibility: show ? 'hidden' : 'visible',
				animationName: show ? 'fadeOut2' : 'fadeIn2',
				animationDuration: '1.4s',
				animationTimingFunction: 'ease-in-out',
				animationFillMode: 'forwards'
			}}
		>
			A DEVELOPER
		</div>
		<div className='about' onClick={onAboutClicked}>
			{aboutText}
		</div>
		<div
			className='arrow'
			style={{
				animationName: show ? 'fadeOut3' : 'fadeIn3',
				animationDuration: '2.1s',
				animationTimingFunction: 'ease-in-out',
				animationFillMode: 'forwards'
			}}
		>
			<img src={arrow} alt='down-nav' />
		</div>
	</div>
);

export default class homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAboutOpen: false,
			aboutText: 'About'
		};
		this.onAboutClicked = this.onAboutClicked.bind(this);
	}

	onAboutClicked = e => {
		e.preventDefault();
		this.setState(
			{
				isAboutOpen: !this.state.isAboutOpen
			},
			() => {
				if (this.state.isAboutOpen) {
					this.setState({
						aboutText: 'Close'
					});
				} else {
					this.setState({
						aboutText: 'About'
					});
				}
			}
		);
	};

	render() {
		return (
			<div className='homepage'>
				<Cover
					show={this.state.isAboutOpen}
					onAboutClicked={this.onAboutClicked}
					aboutText={this.state.aboutText}
				/>
				<div className='hero'>
					<video id='heroVid' autoPlay muted loop>
						<source src={heroVid} type='video/mp4' />
					</video>
				</div>
			</div>
		);
	}
}
