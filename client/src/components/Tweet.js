import React, { Component } from 'react';

class Tweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            id: this.props.id,
            text: this.props.text,
            timestamp: this.props.timestamp,
            link: this.props.link,
        };
    }

    render() {
        const {username, id, text, timestamp, link} = this.props;
        return(
            <div>
                <p>{username}</p>
                <p>{id}</p>
            </div>
        )
    }
}

export default Tweet;