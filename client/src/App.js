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
            count: 0,
        }
    }

    async componentDidMount() {
        let count = await this.getCount();
        this.setState({
            count: count,
        })
    }
    

    async getStory() {
        const res = await fetch("http://localhost:6969/api/randomStory");
        const story = await res.json();
        await this.incrementCount();
        this.setState({
            username: story.username,
            text: story.text,
            timestamp: story.timestamp,
            link: story.link,
            attached_images: story.attached_images,
            show: true,
        });
    }

    async getCount() {
        const res = await fetch('http://localhost:6969/api/storyReadCount');
        const count = await res.json();
        return count.count;
    }

    async incrementCount() {
        let options = {
            method: 'POST'
        };
        await fetch('http://localhost:6969/api/storyReadCount', options);
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        const { username, text, timestamp, link, attached_images } = this.state;
        return (
            <main>
                <InfoModal />
                <div className="text-center">
                    <h1 className="mt-24 text-5xl font-bold text-white">#ShiorinStories</h1>
                    <button onClick={this.getStory.bind(this)} 
                        className="bg-light-purple hover:bg-light-purple text-white purple-shadow font-bold py-2 px-4 mt-5 rounded-lg">
                            👁️‍🗨️ Read a story 👁️‍🗨️
                    </button>
                    <p className="italic text-light-gray text-xs mt-0.5 mb-5">Novelites have read {this.state.count.toLocaleString()} stories!</p>
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
