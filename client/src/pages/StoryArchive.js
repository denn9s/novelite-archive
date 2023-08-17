import { useEffect, useState } from "react";

import { BASE_ENDPOINT_URL, BASE_TWEET_LINK, BASE_TWITTER_URL, STORY_ENDPOINT } from '../utils/constants';

const Archive = () => {
    let username = "username";
    let timestamp = "timestamp";
    let date = "date";

    let [original_table, setOriginalTable] = useState();
    let [table, setTable] = useState();
    let [table_sort, setTableSort] = useState({
        ascending: false,
        descending: false,
    });
    let [table_headers, setTableHeaders] = useState({
        username: username,
        date: date,
    })

    const sort = (field) => {
        if (table_sort.ascending) {
            setTableSort({ascending: false, descending: true})
            if (field === username) {
                setTable([...table].sort((a, b) => (a[field].toUpperCase() < b[field].toUpperCase()) ? 1 : -1));
                setTableHeaders({...table_headers, username: `${username} ↓`, date: date})
            } else if (field === timestamp) {
                setTable([...table].sort((a, b) => (Date.parse(a[field]) < Date.parse(b[field])) ? 1 : -1));
                setTableHeaders({...table_headers, username: username, date: `${date} ↓`})
            }
        } else if (table_sort.descending) {
            setTableSort({ascending: false, descending: false})
            setTableHeaders({...table_headers, username: username, date: date})
            setTable(original_table);
        } else {
            setTableSort({ascending: true, descending: false})
            if (field === username) {
                setTable([...table].sort((a, b) => (a[field].toUpperCase() > b[field].toUpperCase()) ? 1 : -1));
                setTableHeaders({...table_headers, username: `${username} ↑`, date: date})
            } else if (field === timestamp) {
                setTable([...table].sort((a, b) => (Date.parse(a[field]) > Date.parse(b[field])) ? 1 : -1));
                setTableHeaders({...table_headers, username: username, date: `${date} ↑`})
            }
        }
    };

    useEffect(() => {
        const getData = async() => {
            try {
                const res = await fetch(`${BASE_ENDPOINT_URL}${STORY_ENDPOINT}`)
                const stories = await res.json();
                setTable(stories);
                setOriginalTable(stories);
            } catch (e) {
                console.log(e);
            }
        }
        getData();
    }, [])

    if (table === undefined) {
        return (
            <div className="mt-[10em]">
                <h1 className="text-2xl text-center text-white loading">Loading</h1>
                <p className="text-center text-light-gray text-xs">Sorry, I'll make this faster eventually! :(</p>
                <p className="text-center text-light-gray text-xs">... but if this really fast and you're still able to read this, hello!</p>
            </div>
        )
    }

    return (
        <>
            <h1 className="my-5 text-5xl font-bold text-white text-center">#ShiorinStories Archive</h1>
            <div className="flex items-center justify-center">
                <div className="overflow-auto h-[calc(100vh-200px)] rounded-lg">
                    <table className="border border-light-gray border-spacing-4 rounded-md">
                        <thead className="text-white bg-light-purple sticky top-0">
                            <tr>
                                <th scope="col" className="table-head" onClick={() => sort(username)}>
                                    {table_headers.username}
                                </th>
                                <th scope="col" className="table-head" onClick={() => sort(timestamp)}>
                                    {table_headers.date}
                                </th>
                                <th scope="col">
                                    Original Link
                                </th>
                            </tr>
                        </thead>
                        <tbody className="font-mono text-white bg-mid-gray border border-light-purple">
                            {table.map(tweet => (
                                <tr key={tweet.tweet_id} className="hover:bg-light-purple-opaque">
                                    <td className="whitespace-nowrap px-6 py-2 border-b-1 border-light-purple">
                                        <a href={`${BASE_TWITTER_URL}${tweet.username}`}>
                                            <span className="text-lighter-purple">@</span>{tweet.username}
                                        </a>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-2">
                                        {new Date(tweet.timestamp).toLocaleDateString('en-us', {month:"short", day:"numeric", year:"numeric", })}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-2">
                                        <a href={`${BASE_TWEET_LINK}${tweet.tweet_id}`}>
                                            {`/status/${tweet.tweet_id}`}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </> 
    );
};

export default Archive
