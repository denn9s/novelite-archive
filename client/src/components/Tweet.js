import React, { Component } from 'react';

class Tweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            text: this.props.text,
            timestamp: this.props.timestamp,
            link: this.props.link,
        };
    }

    render() {
        const {username, text, timestamp, link} = this.props;
        return(
                <div className="rounded-lg mx-auto border-x-4 border-light-purple bg-mid-gray shadow-lg px-5 pt-5 pb-4 mb-4 max-w-[600px]">
                    <div className="w-full pt-1"></div>
                    <div className="w-full mb-8">
                        <div className="text-5xl text-light-purple text-left leading-tight h-3">“</div>
                        <p className="text-xl text-white text-center px-5">{text}</p>
                        <div className="text-5xl text-light-purple text-right leading-tight h-3 -mt-3">”</div>
                    </div>
                    <div className="w-full">
                        <p className="text-xl text-light-purple font-bold">
                            <a href={link}>@{username}</a>
                        </p>
                        <p className="text-xs text-white">{timestamp}</p>
                    </div>
                </div>
        )
    }
}

export default Tweet;