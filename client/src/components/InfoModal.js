import React from "react";

export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <img src="profile.jpg" className="absolute rounded-full max-w-[4em] mx-5 mb-5 top-5 right-0 border-2 border-light-purple purple-shadow hover:cursor-pointer"
                alt="our goth"
                onClick={() => setShowModal(true)}>
            </img>
            <img src="info.png" className="absolute rounded-full max-w-[4em] mx-5 mb-5 top-5 right-0 pointer-events-none"
                alt="info overlay">
            </img>
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-y-auto fixed overflow-x-hidden inset-0">
                        <div className="modal-wrapper" onClick={() => setShowModal(false)}/>
                        <div className="max-w-xl  my-auto">
                            <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-mid-gray border-x-4 border-light-purple">
                                <div className="mx-2 flex items-start justify-between p-3">
                                    <h3 className="text-white text-4xl font-bold mr-5">
                                        About / Info
                                    </h3>
                                    <button
                                        className="text-white text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="block text-white opacity-50">×</span>
                                    </button>
                                </div> 
                                <div className="text-white relative px-6 overflow-auto pb-4 flex-auto">
                                    <h6 className="text-3xl font-medium mt-4">What's the purpose of this?</h6>
                                    <p className="py-3 text-white text-md">
                                        This was made for <s>my</s> our favorite Hololive archiver,{' '}
                                        <a href="https://www.youtube.com/@ShioriNovella" className="text-light-purple">Shiori Novella</a>,{' '}
                                        with the intention of letting fans have an easier time of picking a random Novelite fanfiction to read. 
                                        Scrolling through the hashtag can be tedious, but I hope this can make it a bit less of a headache!
                                    </p>
                                    <h6 className="text-3xl font-medium mt-4">How does it work?</h6>
                                    <p className="py-3 text-white text-md">
                                        At midnight UTC everyday, new stories under the hashtag
                                        <a href="https://twitter.com/hashtag/ShiorinStories" className="text-light-purple"> #ShiorinStories </a>
                                        are automatically pulled in to a personal database, and stories are retrieved from there instead of using Twitter's search functionality.
                                        The source code is located on <a href="https://github.com/denn9s/shiorin-stories" className="text-light-purple">GitHub</a>!
                                    </p>
                                    <h6 className="text-3xl font-medium mt-4">Acknowledgements</h6>
                                    <ul className="list-disc list-inside py-3">
                                        <li className="ml-1">
                                            <a href="https://www.youtube.com/@ShioriNovella" className="text-light-purple">Shiori Novella</a>, for obvious reasons, I'd hope.
                                        </li>
                                        <li className="ml-1">
                                            All the fanfic writers - I'm not much of a writer myself, but I really enjoy everyone's creativity!
                                        </li>
                                        <li>
                                            The developer of <a href="https://howsthevolu.me/" className="text-light-purple">How's the Volume?</a>{' '}
                                            - the counter definitely took some inspiration from there, don't forget to check it out.
                                        </li>
                                        <li>
                                            <a href="https://react.dev/" className="text-light-purple">React</a> 
                                            {' '}and{' '}
                                            <a href="https://tailwindcss.com/" className="text-light-purple">Tailwind</a> 
                                            {' '}for front-end stuff,{' '}
                                            <a href="https://expressjs.com/" className="text-light-purple">Express</a> for back-end stuff.
                                        </li>
                                    </ul>
                                    <h6 className="text-3xl font-medium mt-4">Other Stuff</h6>
                                    <p className="py-3 text-white text-md">
                                        If there are any issues,{' '}
                                        <a href="https://www.twitter.com/den_dayone" className="text-light-purple">let me know</a>!{' '}
                                        This includes technical stuff, tweets that don't belong (since this is automated), 
                                        or whatever else you can think of.
                                        I don't normally use any of these frameworks/libraries, so hopefully it isn't too much of a mess. 
                                        Always happy to chat
                                        about it!
                                    </p>

                                </div>
                                <div className="flex justify-center mb-2">
                                    <a href="https://www.twitter.com/den_dayone">
                                        <img src="yorick-small.png" alt="my crude drawing of yorick"/>
                                    </a>
                                </div>
                                <div className="flex justify-center italic text-light-gray text-xs mb-5 px-6 ">
                                    <p className="text-center">
                                        You can find me at
                                        <span href="https://twitter.com/hashtag/ShiorinStories" className="text-light-purple"> @den_dayone </span>
                                        (or by clicking my poorly-drawn Yorick)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}
