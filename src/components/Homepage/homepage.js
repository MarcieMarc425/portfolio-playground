import React, { Component } from 'react';
import heroVid from '../../resources/hero.mp4';
import './homepage.css';

export default class homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='homepage'>
                <div className='heroCover'>
                    <div className='heroText'>Marc Tse</div>
                    <div className='heroText2'>A DEVELOPER</div>
                    <div className='about'>About</div>
                </div>
                <div className='hero'>
                    <video id='heroVid' autoPlay muted loop>
                        <source src={heroVid} type='video/mp4' />
                    </video>
                </div>
            </div>
        );
    }
}
