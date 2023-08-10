import './App.css';
import { Component } from "react";

import Story from './components/Story';
import InfoModal from './components/InfoModal';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            id: '',
            text: '',
            timestamp: '',
            link: '',
            attached_images: [],
            show: false,
            modal_show: false,
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    async getStory() {
        const res = await fetch("http://localhost:6969/api/randomStory");
        const story = await res.json();
        this.setState({
            username: story.username,
            text: story.text,
            timestamp: story.timestamp,
            link: story.link,
            attached_images: story.attached_images,
            show: true,
        });
    }

    showModal() {
        this.setState({
            modal_show: true,
        });
    }

    hideModal() {
        this.setState({
            modal_show: false,
        });
    }

    render() {
        const { username, text, timestamp, link, attached_images } = this.state;
        return (
            <main>
                <button onClick={this.showModal} className="modal-button">Show</button>
                <InfoModal modal_show={this.state.modal_show} handleClose={this.hideModal}>
                    <p>Modal</p>
                </InfoModal>
                <h1>#ShiorinStories</h1>
                <a href="https://www.youtube.com/@ShioriNovella">link here</a>
                <br/>
                <button onClick={this.getStory.bind(this)}>👁️‍🗨️ Read a story 👁️‍🗨️</button>
                {
                    this.state.show && 
                    <Story 
                        username = {username}
                        text = {text}
                        timestamp = {timestamp}
                        link = {link}
                        attached_images = {attached_images}
                    />
                }
            </main>
        );
    }
}

export default App;
