import React, { Component } from 'react';

import Linkify from "linkify-react";
import "linkify-plugin-hashtag";

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
        const options = { 
            defaultProtocol: 'https', 
            className: function(href, type) {
                if (type === 'hashtag') {
                    return "text-lighter-purple";
                } else {
                    return "text-light-purple"  
                }
            },
            formatHref: function(href, type) {
                if (type === 'hashtag') {
                    return href = 'https://twitter.com/hashtag/' + href.substr(1);
                } else {
                    return href;
                }
            }
        };
        return(
                <div className="rounded-lg mx-auto border-x-4 border-light-purple bg-mid-gray shadow-lg px-5 pt-5 pb-4 mb-4 max-w-[600px]">
                    <div className="w-full pt-1"></div>
                    <div className="w-full mb-8">
                        <div className="text-5xl text-light-purple text-left leading-tight h-3">“</div>
                        <Linkify as="p" className="text-xl text-white text-center px-5" options={options}>
                            {text}
                        </Linkify>
                        <div className="text-5xl text-light-purple text-right leading-tight h-3 -mt-3">”</div>
                    </div>
                    <div className="w-full">
                        <p className="text-xl text-light-purple font-bold">
                            <a href={"https://twitter.com/" + username}>@{username}</a>
                        </p>
                        <p className="text-xs text-white">
                        <a href={link}>{timestamp}</a>
                        </p>
                    </div>
                </div>
        )
    }
}

export default Tweet;