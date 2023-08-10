import './App.css';
import { Component, useState } from "react";

import Story from './components/Story';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            id: '',
            text: '',
            timestamp: Date(),
            link: '',
            attached_images: [],
        }
    }

    async getStory() {
        const res = await fetch("http://localhost:3001/api/randomStory");
        const story = await res.json();
        this.setState({
            username: story.username,
            id: story.id,
            text: story.text,
            timestamp: story.timestamp,
            link: story.link,
            attached_images: story.attached_images,
        });
    }

    render() {
        const { username, id, text, timestamp, link, attached_images } = this.state;
        return (
            <main>
                <h1>#ShiorinStories</h1>
                <a href="https://www.youtube.com/@ShioriNovella">link here</a>
                <button onClick={this.getStory.bind(this)}>click me</button>
                <Story 
                    username = {username}
                    id = {id}
                    text = {text}
                    timestamp = {timestamp}
                    link = {link}
                    attached_images = {attached_images}
                />
            </main>
        );
    }
}

export default App;
