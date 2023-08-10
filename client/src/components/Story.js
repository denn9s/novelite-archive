import React, { Component } from 'react';

import Tweet from './Tweet';
import ImageDisplay from './ImageDisplay';

class Story extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            id: this.props.id,
            text: this.props.text,
            timestamp: this.props.timestamp,
            link: this.props.link,
            attached_images: this.props.attached_images,
        };
    }

    render() {
        const {username, id, text, timestamp, link, attached_images} = this.props;
        return(
            <main>
                <Tweet 
                    username = {username}
                    id = {id}
                    text = {text}
                    timestamp = {timestamp}
                    link = {link}
                />
                <ImageDisplay
                    attached_images = {attached_images}
                />
            </main>

        )
    }
}

export default Story;