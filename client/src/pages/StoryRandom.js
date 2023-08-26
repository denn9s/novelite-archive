import '../App.css';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Story from '../components/Story';
import HeaderTypewriter from '../components/HeaderTypewriter';

import { BASE_ENDPOINT_URL, BASE_TWEET_LINK, RANDOM_STORY_ENDPOINT, STORY_READ_COUNT_ENDPOINT, BASE_TWITTER_URL, 
    STORY_ENDPOINT, SHIORI_YOUTUBE_LINK } from '../utils/constants';

const StoryRandom = () => {
    let { tweet_id } = useParams();
    let navigate = useNavigate();
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
        async function getCount() {
            const res = await fetch(`${BASE_ENDPOINT_URL}${STORY_READ_COUNT_ENDPOINT}`);
            let count_obj = await res.json();
            setState(state => ({
                ...state,
                count: count_obj.count,
            }));
        }
        async function increaseCountOnce() {
            await getCount();
            await fetch(`${BASE_ENDPOINT_URL}${STORY_READ_COUNT_ENDPOINT}`, { method: "POST" });
            setState(state => ({
                ...state,
                count: state.count + 1,
            }));
        }
        async function getSingleStory() {
            const reg = new RegExp('^[0-9]+$');
            if (tweet_id && reg.test(tweet_id)) {
                try {
                    const res = await fetch(`${BASE_ENDPOINT_URL}${STORY_ENDPOINT}/${tweet_id}`)
                    const story = await res.json();
                    if (story == null) { return; }
                    await setState(state => ({
                        ...state,
                        username: story.username,
                        text: story.text,
                        timestamp: story.timestamp,
                        link: `${BASE_TWEET_LINK}/${story.id}`,
                        attached_images: story.attached_images,
                        show: true,
                    }));
                } catch (e) {
                    console.log(e);
                }
            }
        }
        if (tweet_id) { 
            getSingleStory(tweet_id);
            increaseCountOnce();
        } else {
            getCount();
        }
    }, [tweet_id]);

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
            navigate(`/stories/${story.id}`);
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
                    <a href={`${SHIORI_YOUTUBE_LINK}`} className="text-light-purple">YouTube</a>{' '} 
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

export default StoryRandom;
