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
            <blockquote cite={username}>
                    {text}
                    <span>
                        ~ <a href={`https://twitter.com/${username}`} className="username_link">@{username}</a>
                        <br></br>
                        <a href={link} className="username_link">{timestamp}</a>
                    </span>
            </blockquote>
        )
    }
}

export default Tweet;