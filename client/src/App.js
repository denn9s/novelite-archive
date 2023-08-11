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
            <main class="h-screen bg-dark-gray">
                {/* <button onClick={this.showModal} className="modal-button content-center">Show</button>
                <InfoModal modal_show={this.state.modal_show} handleClose={this.hideModal}>
                    <p>Modal</p>
                </InfoModal> */}
                <div class="text-center">
                    <h1 class="mb-6 text-5xl font-bold text-white">#ShiorinStories</h1>
                    <a href="https://www.youtube.com/@ShioriNovella" class="text-white">link here</a>
                    <div></div>
                    <button onClick={this.getStory.bind(this)} 
                        class="bg-light-purple hover:bg-light-purple text-white font-bold py-2 px-4">
                            👁️‍🗨️ Read a story 👁️‍🗨️
                    </button>
                </div>
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
