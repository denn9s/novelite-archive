const BASE_ENDPOINT_PROD = 'https://api.novelit.es/'
const BASE_ENDPOINT_DEV = 'http://localhost:6969/'
export const BASE_ENDPOINT_URL = process.env.NODE_ENV === 'production' ? BASE_ENDPOINT_PROD : BASE_ENDPOINT_DEV;

export const STORY_ENDPOINT='story';
export const RANDOM_STORY_ENDPOINT='randomStory';
export const STORY_READ_COUNT_ENDPOINT='storyReadCount';

export const BASE_TWITTER_URL = 'https://www.twitter.com/';
export const BASE_TWEET_LINK = BASE_TWITTER_URL + 'i/status/'
