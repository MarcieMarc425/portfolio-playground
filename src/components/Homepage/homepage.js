import React, { Component } from 'react';
import heroVid from '../../resources/hero.mp4';
import arrow from '../../resources/arrow.png';
import './homepage.css';

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

const Project = ({ title, subtitle }) => (
    <div
        className='project'
        style={{
            height: '50vh',
            width: '50vw',
            backgroundColor: '#2a638c',
            marginLeft: '25vw',
            animation: 'exFadeIn 2s ease-in-out forwards'
        }}
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
            isLanding: true,
            aboutText: 'About',
            index: 0
        };
        this.onAboutClicked = this.onAboutClicked.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    };

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

    handleScroll = e => {
        console.log(window.scrollY);
    };

    render() {
        return (
            <div className='homepage' onScroll={this.handleScroll}>
                {/* <Cover
                    show={this.state.isAboutOpen}
                    landing={this.state.isLanding}
                    onAboutClicked={this.onAboutClicked}
                    aboutText={this.state.aboutText}
				/> */}
                <div className='hero'>
                    <div
                        className='hero'
                        style={{
                            animation: 'videoFadeOut 2s ease-in-out forwards'
                        }}
                    >
                        <video id='heroVid' autoPlay muted loop>
                            <source src={heroVid} type='video/mp4' />
                        </video>
                    </div>
                    <Project
                        title={'Oriental Tech'}
                        subtitle={'A BUSINESS BRAND REIMAGINED'}
                    />
                    <div
                        className='ex1'
                        style={{
                            height: '55vh',
                            width: '50vw',
                            backgroundColor: '#fff',
                            marginLeft: '25vw'
                        }}
                    />
                </div>
            </div>
        );
    }
}
