import '../App.css';
import { Component } from "react";

import Story from '../components/Story';
import HeaderTypewriter from '../components/HeaderTypewriter';

import { BASE_ENDPOINT_URL, BASE_TWEET_LINK, RANDOM_STORY_ENDPOINT, STORY_READ_COUNT_ENDPOINT } from '../utils/constants';

class Stories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            id: '',
            text: '',
            timestamp: '',
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
        try {
            const res = await fetch(`${BASE_ENDPOINT_URL}${RANDOM_STORY_ENDPOINT}`);
            const story = await res.json();
            await this.incrementCount();
            this.setState({
                username: story.username,
                text: story.text,
                timestamp: story.timestamp,
                link: `${BASE_TWEET_LINK}${story.id}`,
                attached_images: story.attached_images,
                show: true,
            });
        } catch (e) {
            return;
        }
    }

    async getCount() {
        try {
            const res = await fetch(`${BASE_ENDPOINT_URL}${STORY_READ_COUNT_ENDPOINT}`);
            const count = await res.json();
            return count.count;
        } catch (e) {
            return 0;
        }
    }

    async incrementCount() {
        let options = {
            method: "POST"
        };
        await fetch(`${BASE_ENDPOINT_URL}${STORY_READ_COUNT_ENDPOINT}`, options);
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        const { username, text, timestamp, link, attached_images } = this.state;
        return (
            <main>
                <div className="text-center">
                    <HeaderTypewriter text="#ShiorinStories" delay={70}/>
                    <p className="text-white">
                        Subscribe to Shiori's {' '}
                        <a href="https://www.youtube.com/@ShioriNovella" className="text-light-purple">YouTube</a>{' '} 
                        and follow her on {' '}
                        <a href="https://www.twitter.com/shiorinovella" className="text-light-purple">Twitter</a>!
                    </p>
                    <button onClick={this.getStory.bind(this)} 
                        className="bg-light-purple hover:bg-light-purple text-white purple-shadow font-bold py-2 px-4 mt-5 rounded-lg">
                            👁️‍🗨️ Read a story 👁️‍🗨️
                    </button>
                    <p className="italic text-light-gray text-xs mt-0.5 mb-5">
                        Novelites have read 
                        <span style={{ fontWeight: 'bold' }}> {this.state.count.toLocaleString()} </span>
                        stories!
                    </p>
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

export default Stories;
