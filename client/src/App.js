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
        }
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

    render() {
        const { username, text, timestamp, link, attached_images } = this.state;
        return (
            <main>
                <InfoModal />
                <div className="text-center">
                    <h1 className="mt-24 text-5xl font-bold text-white">#ShiorinStories</h1>
                    <button onClick={this.getStory.bind(this)} 
                        className="bg-light-purple hover:bg-light-purple text-white purple-shadow font-bold py-2 px-4 my-5 rounded-lg">
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
