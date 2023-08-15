import { useEffect, useState } from "react";

const Archive = () => {
    let [original_table, setOriginalTable] = useState();
    let [table, setTable] = useState();
    let [ascending, setAscending] = useState(false);
    let [descending, setDescending] = useState(false);

    const sort = (field) => {
        if (ascending) {
            setDescending(true);
            setAscending(false);
            setTable(table.sort((a, b) => (a[field] > b[field]) ? 1 : -1));
        } else if (descending) {
            setAscending(false);
            setDescending(false);
            setTable(original_table);
        } else {
            setAscending(true);
            setDescending(false);
            setTable(table.sort((a, b) => (a[field] < b[field]) ? 1 : -1));
        }
    };

    useEffect(() => {
        const getData = async() => {
            const res = await fetch(`http://localhost:6969/story`)
            const stories = await res.json();
            setTable(stories);
            setOriginalTable(stories);
        }
        getData();
    }, [])

    if (table === undefined) {
        return (
            <div className="mt-[10em]">
                <h1 className="text-2xl text-center text-white loading">Loading</h1>
                <p className="text-center text-light-gray text-xs">Sorry, I'll make this faster eventually! :(</p>
            </div>
        )
    }

    return (
        <>
            <h1 className="mt-5 text-5xl font-bold text-white text-center">#ShiorinStories Archive</h1>;
            <div className="mx-5 flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b bg-mid-gray sm:rounded-lg">
                            <table className="min-w-full divide-y">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider"
                                            onClick={() => sort('username')}
                                        >
                                            Username
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider"
                                            onClick={() => sort('timestamp')}
                                        >
                                            Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider"
                                        >
                                            Original Link
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-mid-200 bg-dark-mid">
                                    {table.map(tweet => (
                                        <tr key={tweet.id}>
                                            <td className="pl-[0.5em] whitespace-nowrap bg-mid-gray">
                                                <div className="flex items-center">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-white">{tweet.username}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-3 whitespace-nowrap bg-mid-gray">
                                                <div className="text-sm text-white">{tweet.timestamp}</div>
                                            </td>
                                            <td className="px-6 py-3 whitespace-nowrap text-sm text-white bg-mid-gray">
                                            <a href={"https://twitter.com/i/status/" + tweet.tweet_id}>{`https://twitter.com/i/status/${tweet.tweet_id}`}</a>
                                                
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    );
};

export default Archive
