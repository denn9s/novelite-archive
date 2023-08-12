import React from "react";

export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <img src="profile.jpg" className="absolute rounded-full max-w-[4em] mx-5 mb-5 top-5 right-0 border-2 border-light-purple purple-shadow hover:cursor-pointer"
                alt="our goth"
                onClick={() => setShowModal(true)}>
            </img>
            <img src="info3.png" className="absolute rounded-full max-w-[4em] mx-5 mb-5 top-5 right-0 pointer-events-none"
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
                                        This is made for our favorite Hololive archiver, <a href="https://www.youtube.com/@ShioriNovella" 
                                        className="text-light-purple">Shiori Novella</a>, 
                                        with the intention of letting fans have an easier time of picking a random Novelite fanfiction to read. 
                                        Scrolling through the hashtag can be tedious, but I hope this can make it a bit less of a headache!
                                    </p>
                                    <h6 className="text-3xl font-medium mt-4">How does it work?</h6>
                                    <p className="py-3 text-white text-md">
                                        At midnight UTC everyday, new stories under the hashtag are automatically pulled in to a personal database, 
                                        and stories are retrieved from there.
                                        The source code is located on <a href="https://github.com/denn9s/shiorin-stories" className="text-light-purple">GitHub</a>!
                                    </p>
                                    <h6 className="text-3xl font-medium mt-4">Acknowledgements</h6>
                                    <ul className="list-disc list-inside py-3">
                                        <li className="ml-1">
                                            <a href="https://www.youtube.com/@ShioriNovella" className="text-light-purple">Shiori Novella</a>, for obvious reasons!
                                        </li>
                                        <li className="ml-1">
                                            All the fanfic writers - I'm not much of a writer myself, but I really enjoy everyone's creativity.
                                        </li>
                                        <li>
                                            The developer of <a href="https://howsthevolu.me/" className="text-light-purple">How's the Volume?</a>{' '}
                                            - the counter definitely took some inspiration from there, don't forget to check it out!
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex justify-center mb-2">
                                    <a href="https://www.twitter.com/den_dayone">
                                        <img src="yorick-small.png" alt="my crude drawing of yorick"/>
                                    </a>
                                </div>
                                <p className="flex justify-center mb-2 italic text-light-gray text-xs mt-0.5 mb-5">You can find me if you click on my poorly drawn Yorick!</p>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}
