import { useEffect, useState } from "react";

import { BASE_ENDPOINT_URL, BASE_TWEET_LINK, BASE_TWITTER_URL, STORY_ENDPOINT } from '../utils/constants';

import '../styles/archive.css';

const Archive = () => {
    let username_display = "Username";
    let date_display = "Date";

    let username_field = "username";
    let date_field = "timestamp";

    let [table, setTable] = useState();
    let [table_sort, setTableSort] = useState({
        ascending: false,
        descending: true,
    });
    let [table_headers, setTableHeaders] = useState({
        username: username_display,
        date: date_display,
    })

    const sort = (field) => {
        if (table_sort.ascending) {
            setTableSort({ascending: false, descending: true})
            if (field === username_field) {
                setTable([...table].sort((a, b) => (a[field].toUpperCase() < b[field].toUpperCase()) ? 1 : -1));
                setTableHeaders({...table_headers, username: `${username_display} ▾`, date: date_display})
            } else if (field === date_field) {
                setTable([...table].sort((a, b) => (Date.parse(a[field]) < Date.parse(b[field])) ? 1 : -1));
                setTableHeaders({...table_headers, username: username_display, date: `${date_display} ▾`})
            }
        } else {
            setTableSort({ascending: true, descending: false})
            if (field === username_field) {
                setTable([...table].sort((a, b) => (a[field].toUpperCase() > b[field].toUpperCase()) ? 1 : -1));
                setTableHeaders({...table_headers, username: `${username_display} ▴`, date: date_display})
            } else if (field === date_field) {
                setTable([...table].sort((a, b) => (Date.parse(a[field]) > Date.parse(b[field])) ? 1 : -1));
                setTableHeaders({...table_headers, username: username_display, date: `${date_display} ▴`})
            }
        }
    };

    useEffect(() => {
        const getData = async() => {
            try {
                const res = await fetch(`${BASE_ENDPOINT_URL}${STORY_ENDPOINT}`)
                const stories = await res.json();
                setTable([...stories].sort((a, b) => (Date.parse(a[date_field]) < Date.parse(b[date_field])) ? 1 : -1));
                setTableHeaders({...table_headers, date: `${date_display} ▾`})
            } catch (e) {
                console.log(e);
            }
        }
        getData();
    }, [date_field])


    return (
        <>
            <h1 className="mt-5 text-5xl font-bold text-white text-center">#ShiorinStories Archive</h1>
            {table === undefined ?
                // loading 
                <div className="mt-[10em]">
                    <h1 className="text-2xl text-center text-white loading">Loading</h1>
                    <p className="text-center text-light-gray text-xs">Sorry, I'll make this faster eventually! :(</p>
                    <p className="text-center text-light-gray text-xs">... but if this really fast and you're still able to read this, hello!</p>
                </div>
                :
                // finished loading, display table
                <>
                    <p className="text-center text-light-gray text-s mt-0.5">Total stories: {table.length}</p>
                    <div className="flex items-center justify-center">
                        <div className="overflow-auto h-[calc(100vh-200px)] rounded-lg">
                            <table className="border border-light-gray border-spacing-4 rounded-md">
                                <thead className="text-white bg-light-purple sticky top-0">
                                    <tr>
                                        <th scope="col" className="table-head" onClick={() => sort(username_field)}>
                                            {table_headers.username}
                                        </th>
                                        <th scope="col" className="table-head" onClick={() => sort(date_field)}>
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
                                                <a href={`${BASE_TWITTER_URL}/${tweet.username}`}>
                                                    <span className="text-lighter-purple">@</span>{tweet.username}
                                                </a>
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-2">
                                                {new Date(tweet.timestamp).toLocaleDateString('en-us', { month: "short", day: "numeric", year: "numeric" })}
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
            }
        </>
    )
}

export default Archive
