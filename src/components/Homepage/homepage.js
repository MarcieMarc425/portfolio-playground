import React, { Component } from 'react';
import heroVid from '../../resources/hero.mp4';
import arrow from '../../resources/arrow.png';
import './homepage.css';
import './animation.css';

const Cover = ({ show, landing, onAboutClicked, aboutText }) => (
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
				? 'rgba(41, 41, 41, 0.88)'
				: 'rgba(41, 41, 41, 0.5)',
			transition: 'background-color 1s linear',
			zIndex: 2
		}}
	/>
	// <div
	//     style={{
	//         position: 'fixed',
	//         width: '100%',
	//         height: '100%',
	//         top: 0,
	//         left: 0,
	//         right: 0,
	//         bottom: 0,
	//         backgroundColor: show
	//             ? 'rgba(41, 41, 41, 0.88)'
	//             : 'rgba(41, 41, 41, 0.5)',
	//         transition: 'background-color 1s linear',
	//         zIndex: 2
	//     }}
	// >
	// <div
	//     className='heroText'
	//     style={
	//         show
	//             ? {
	//                   animationName: 'fadeOut',
	//                   animationDuration: '2.1s',
	//                   animationTimingFunction: 'ease-in-out',
	//                   animationFillMode: 'forwards'
	//               }
	//             : {
	//                   // visibility: show ? 'hidden' : 'visible',
	//                   animationName: 'fadeIn',
	//                   animationDuration: '0.7s',
	//                   animationTimingFunction: 'ease-in-out',
	//                   animationFillMode: 'forwards'
	//               }
	//     }
	// >
	//     Marc Tse
	// </div>

	// <div
	//     className='heroText2'
	//     style={{
	//         // visibility: show ? 'hidden' : 'visible',
	//         animationName: show ? 'fadeOut2' : 'fadeIn2',
	//         animationDuration: '1.4s',
	//         animationTimingFunction: 'ease-in-out',
	//         animationFillMode: 'forwards'
	//     }}
	// >
	//     A DEVELOPER
	// </div>
	// <div className='about' onClick={onAboutClicked}>
	//     {aboutText}
	// </div>
	// <div
	//     className='arrow'
	//     style={
	//         show
	//             ? {
	//                   animationName: 'fadeOut3',
	//                   animationDuration: '0.7s',
	//                   animationTimingFunction: 'ease-in-out',
	//                   animationFillMode: 'forwards'
	//               }
	//             : {
	//                   animationName: 'fadeIn3',
	//                   animationDuration: '2.1s',
	//                   animationTimingFunction: 'ease-in-out',
	//                   animationFillMode: 'forwards'
	//               }
	//     }
	// >
	//     <img src={arrow} alt='down-nav' />
	// </div>
	// </div>
);

const FirstProject = ({
	prev,
	firstTime,
	animationState,
	down,
	title,
	subtitle
}) => (
	<div
		className='project'
		style={
			firstTime
				? {
						visibility: 'hidden'
				  }
				: {
						animation: animationState
							? down
								? 'Proj1FadeInFromBot 2s ease-in-out forwards'
								: 'Proj1FadeInFromTop 1s ease-in-out forwards'
							: down
							? prev &&
							  'Proj1FadeOutToTop 1s ease-in-out forwards'
							: prev &&
							  'Proj1FadeOutToBot 2s ease-in-out forwards'
				  }
		}
	>
		<div className='projectTitle'>{title}</div>
		<div className='projectSubTitle'>- {subtitle}</div>
	</div>
);

const Project = ({
	prev,
	firstTime,
	animationState,
	fadeInBot,
	fadeInTop,
	fadeOutBot,
	fadeOutTop,
	down,
	title,
	subtitle
}) => (
	<div
		className='project'
		style={
			firstTime
				? {
						visibility: 'hidden'
				  }
				: {
						animation: animationState
							? down
								? fadeInBot
								: fadeInTop
							: down
							? prev && fadeOutTop
							: prev && fadeOutBot
				  }
		}
	>
		<div className='projectTitle'>{title}</div>
		<div className='projectSubTitle'>- {subtitle}</div>
	</div>
);

export default class homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAboutOpen: false,
			prev: {
				isLanding: true,
				isFirst: false,
				isSecond: false,
				isThird: false,
				isForth: false,
				isFifth: false
			},
			pageControl: {
				isLanding: true,
				isFirst: false,
				isSecond: false,
				isThird: false,
				isForth: false,
				isFifth: false
			},
			aboutText: 'About',
			scrollDirUp: false,
			scrollDirDown: false,
			scrollLock: false,
			firstTime: true,
			index: 0
		};
		this.onAboutClicked = this.onAboutClicked.bind(this);
		this.handleWheel = this.handleWheel.bind(this);
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

	handleWheel = e => {
		// Scrolling up
		if (e.deltaY < 0 && !this.state.scrollLock) {
			if (this.state.index === 1) {
				this.setState(
					{
						pageControl: {
							isLanding: true,
							isFirst: false,
							isSecond: false,
							isThird: false,
							isForth: false,
							isFifth: false
						},
						prev: {
							isLanding: false,
							isFirst: true,
							isSecond: false,
							isThird: false,
							isForth: false,
							isFifth: false
						},
						index: 0,
						scrollLock: true,
						scrollDirUp: true,
						scrollDirDown: false
					},
					() =>
						setTimeout(() => {
							this.setState({
								scrollLock: false
							});
						}, 2500)
				);
			} else if (this.state.index === 2) {
				this.setState(
					{
						pageControl: {
							isLanding: false,
							isFirst: true,
							isSecond: false,
							isThird: false,
							isForth: false,
							isFifth: false
						},
						prev: {
							isLanding: false,
							isFirst: false,
							isSecond: true,
							isThird: false,
							isForth: false,
							isFifth: false
						},
						index: this.state.index - 1,
						scrollLock: true,
						scrollDirUp: true,
						scrollDirDown: false
					},
					() =>
						setTimeout(() => {
							this.setState({
								scrollLock: false
							});
						}, 2500)
				);
			} else if (this.state.index === 3) {
				this.setState(
					{
						pageControl: {
							isLanding: false,
							isFirst: false,
							isSecond: true,
							isThird: false,
							isForth: false,
							isFifth: false
						},
						prev: {
							isLanding: false,
							isFirst: false,
							isSecond: false,
							isThird: true,
							isForth: false,
							isFifth: false
						},
						index: this.state.index - 1,
						scrollLock: true,
						scrollDirUp: true,
						scrollDirDown: false
					},
					() =>
						setTimeout(() => {
							this.setState({
								scrollLock: false
							});
						}, 2500)
				);
			} else if (this.state.index === 4) {
				this.setState(
					{
						pageControl: {
							isLanding: false,
							isFirst: false,
							isSecond: false,
							isThird: true,
							isForth: false,
							isFifth: false
						},
						prev: {
							isLanding: false,
							isFirst: false,
							isSecond: false,
							isThird: false,
							isForth: true,
							isFifth: false
						},
						index: this.state.index - 1,
						scrollLock: true,
						scrollDirUp: true,
						scrollDirDown: false
					},
					() =>
						setTimeout(() => {
							this.setState({
								scrollLock: false
							});
						}, 2500)
				);
			} else if (this.state.index === 5) {
				this.setState(
					{
						pageControl: {
							isLanding: false,
							isFirst: false,
							isSecond: false,
							isThird: false,
							isForth: true,
							isFifth: false
						},
						prev: {
							isLanding: false,
							isFirst: false,
							isSecond: false,
							isThird: false,
							isForth: false,
							isFifth: true
						},
						index: this.state.index - 1,
						scrollLock: true,
						scrollDirUp: true,
						scrollDirDown: false
					},
					() =>
						setTimeout(() => {
							this.setState({
								scrollLock: false
							});
						}, 2500)
				);
			}
		}
		// Scrolling down
		else if (e.deltaY > 0 && !this.state.scrollLock) {
			if (this.state.index === 0) {
				this.setState(
					{
						pageControl: {
							isLanding: false,
							isFirst: true,
							isSecond: false,
							isThird: false,
							isForth: false,
							isFifth: false
						},
						prev: {
							isLanding: true,
							isFirst: false,
							isSecond: false,
							isThird: false,
							isForth: false,
							isFifth: false
						},
						index: 1,
						scrollLock: true,
						firstTime: false,
						scrollDirUp: false,
						scrollDirDown: true
					},
					() =>
						setTimeout(() => {
							this.setState({
								scrollLock: false
							});
						}, 2500)
				);
			} else if (this.state.index === 1) {
				this.setState(
					{
						pageControl: {
							isLanding: false,
							isFirst: false,
							isSecond: true,
							isThird: false,
							isForth: false,
							isFifth: false
						},
						prev: {
							isLanding: false,
							isFirst: true,
							isSecond: false,
							isThird: false,
							isForth: false,
							isFifth: false
						},
						index: this.state.index + 1,
						scrollLock: true,
						scrollDirUp: false,
						scrollDirDown: true
					},
					() =>
						setTimeout(() => {
							this.setState({
								scrollLock: false
							});
						}, 2500)
				);
			} else if (this.state.index === 2) {
				this.setState(
					{
						pageControl: {
							isLanding: false,
							isFirst: false,
							isSecond: false,
							isThird: true,
							isForth: false,
							isFifth: false
						},
						prev: {
							isLanding: false,
							isFirst: false,
							isSecond: true,
							isThird: false,
							isForth: false,
							isFifth: false
						},
						index: this.state.index + 1,
						scrollLock: true,
						scrollDirUp: false,
						scrollDirDown: true
					},
					() =>
						setTimeout(() => {
							this.setState({
								scrollLock: false
							});
						}, 2500)
				);
			} else if (this.state.index === 3) {
				this.setState(
					{
						pageControl: {
							isLanding: false,
							isFirst: false,
							isSecond: false,
							isThird: false,
							isForth: true,
							isFifth: false
						},
						prev: {
							isLanding: false,
							isFirst: false,
							isSecond: false,
							isThird: true,
							isForth: false,
							isFifth: false
						},
						index: this.state.index + 1,
						scrollLock: true,
						scrollDirUp: false,
						scrollDirDown: true
					},
					() =>
						setTimeout(() => {
							this.setState({
								scrollLock: false
							});
						}, 2500)
				);
			} else if (this.state.index === 4) {
				this.setState(
					{
						pageControl: {
							isLanding: false,
							isFirst: false,
							isSecond: false,
							isThird: false,
							isForth: false,
							isFifth: true
						},
						prev: {
							isLanding: false,
							isFirst: false,
							isSecond: false,
							isThird: false,
							isForth: true,
							isFifth: false
						},
						index: this.state.index + 1,
						scrollLock: true,
						scrollDirUp: false,
						scrollDirDown: true
					},
					() =>
						setTimeout(() => {
							this.setState({
								scrollLock: false
							});
						}, 2500)
				);
			}
		}
	};

	render() {
		return (
			<div className='homepage'>
				{/* <Cover
                    show={this.state.isAboutOpen}
                    landing={this.state.isLanding}
                    onAboutClicked={this.onAboutClicked}
                    aboutText={this.state.aboutText}
				/> */}
				<div className='hero' onWheel={this.handleWheel}>
					<div
						className='hero'
						style={
							this.state.firstTime
								? { visibility: 'visible' }
								: {
										animation: this.state.pageControl
											.isLanding
											? 'videoFadeIn 2s ease-in-out forwards'
											: 'videoFadeOut 2s ease-in-out forwards'
								  }
						}
					>
						<video id='heroVid' autoPlay muted loop>
							<source src={heroVid} type='video/mp4' />
						</video>
					</div>
					<FirstProject
						prev={this.state.prev.isFirst}
						firstTime={this.state.firstTime}
						animationState={this.state.pageControl.isFirst}
						down={this.state.scrollDirDown}
						title={'Oriental Tech'}
						subtitle={'A BUSINESS BRAND REIMAGINED'}
					/>
					<Project
						prev={this.state.prev.isSecond}
						firstTime={this.state.firstTime}
						animationState={this.state.pageControl.isSecond}
						down={this.state.scrollDirDown}
						fadeInBot={'Proj2FadeInFromBot 1s ease-in-out forwards'}
						fadeInTop={'Proj2FadeInFromTop 1s ease-in-out forwards'}
						fadeOutBot={'Proj2FadeOutToBot 1s ease-in-out forwards'}
						fadeOutTop={'Proj2FadeOutToTop 1s ease-in-out forwards'}
						title={'NYU USTART'}
						subtitle={'HELPING STUDENTS DISCOVER TALENTS'}
					/>
					<Project
						prev={this.state.prev.isThird}
						firstTime={this.state.firstTime}
						animationState={this.state.pageControl.isThird}
						down={this.state.scrollDirDown}
						fadeInBot={'Proj3FadeInFromBot 1s ease-in-out forwards'}
						fadeInTop={'Proj3FadeInFromTop 1s ease-in-out forwards'}
						fadeOutBot={'Proj3FadeOutToBot 1s ease-in-out forwards'}
						fadeOutTop={'Proj3FadeOutToTop 1s ease-in-out forwards'}
						title={'Tencent'}
						subtitle={''}
					/>
					<Project
						prev={this.state.prev.isForth}
						firstTime={this.state.firstTime}
						animationState={this.state.pageControl.isForth}
						down={this.state.scrollDirDown}
						fadeInBot={'Proj4FadeInFromBot 1s ease-in-out forwards'}
						fadeInTop={'Proj4FadeInFromTop 1s ease-in-out forwards'}
						fadeOutBot={'Proj4FadeOutToBot 1s ease-in-out forwards'}
						fadeOutTop={'Proj4FadeOutToTop 1s ease-in-out forwards'}
						title={'Project DNA'}
						subtitle={'HELPING STUDENTS DISCOVER TALENTS'}
					/>
					<Project
						prev={this.state.prev.isFifth}
						firstTime={this.state.firstTime}
						animationState={this.state.pageControl.isFifth}
						down={this.state.scrollDirDown}
						fadeInBot={'Proj5FadeInFromBot 1s ease-in-out forwards'}
						fadeInTop={'Proj5FadeInFromTop 1s ease-in-out forwards'}
						fadeOutBot={'Proj5FadeOutToBot 1s ease-in-out forwards'}
						fadeOutTop={'Proj5FadeOutToTop 1s ease-in-out forwards'}
						title={'Speed Date Match Maker'}
						subtitle={
							'OPTIMIZING COMPATABILITY THROUGH MACHINE LEARNING'
						}
					/>
				</div>
			</div>
		);
	}
}
