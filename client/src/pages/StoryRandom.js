import '../App.css';
import { useEffect, useState } from "react";

import Story from '../components/Story';
import HeaderTypewriter from '../components/HeaderTypewriter';

import { BASE_ENDPOINT_URL, BASE_TWEET_LINK, RANDOM_STORY_ENDPOINT, STORY_READ_COUNT_ENDPOINT, BASE_TWITTER_URL } from '../utils/constants';

const Stories = () => {
    let [state, setState] = useState({
        username: '',
        id: '',
        text: '',
        timestamp: '',
        attached_images: [],
        show: false,
        count: 0,
    });

    useEffect(() => {
        const getCount = async() => {
            try {
                const res = await fetch(`${BASE_ENDPOINT_URL}${STORY_READ_COUNT_ENDPOINT}`);
                let count_obj = await res.json();
                setState(state => ({
                    ...state,
                    count: count_obj.count,
                }));
            } catch (e) {
                console.log(e);
            }
        }
        getCount();
    }, [setState]);

    const getStory = async() => {
        try {
            const res = await fetch(`${BASE_ENDPOINT_URL}${RANDOM_STORY_ENDPOINT}`);
            const story = await res.json();
            await fetch(`${BASE_ENDPOINT_URL}${STORY_READ_COUNT_ENDPOINT}`, { method: "POST" });
            setState({
                ...state,
                username: story.username,
                text: story.text,
                timestamp: story.timestamp,
                link: `${BASE_TWEET_LINK}/${story.id}`,
                attached_images: story.attached_images,
                show: true,
                count: state.count + 1,
            });
        } catch (e) {
            return;
        }
    }

    return (
        <main>
            <div className="text-center">
                <HeaderTypewriter text="#ShiorinStories" delay={70}/>
                <p className="text-white">
                    Subscribe to Shiori's {' '}
                    <a href="https://www.youtube.com/@ShioriNovella" className="text-light-purple">YouTube</a>{' '} 
                    and follow her on {' '}
                    <a href={`${BASE_TWITTER_URL}/shiorinovella`} className="text-light-purple">Twitter</a>!
                </p>
                <button onClick={getStory} 
                    className="purple-shadow py-2 px-4 mt-5 vn-button-style button-white-shadow">
                        "Let's read a story."
                </button>
                <p className="italic text-light-gray text-xs mt-1 mb-5">
                    Novelites have read 
                    <span style={{ fontWeight: 'bold' }}> {state.count.toLocaleString()} </span>
                    stories!
                </p>
            </div>
            {
                state.show && 
                <Story 
                    username = {state.username}
                    text = {state.text}
                    timestamp = {state.timestamp}
                    link = {state.link}
                    attached_images = {state.attached_images}
                />
            }
        </main>
    );
}

export default Stories;
