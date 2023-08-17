import React from "react";

import { Disclosure, Menu, Dialog } from '@headlessui/react'

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Stories', href: '/stories' },
    { name: 'Stories Archive', href: '/stories/archive' },
    // { name: 'Assets', href: '/assets' },
]

export default function Navbar() {
    let [isOpen, setIsOpen] = React.useState(false)

    return (
        <>
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    {/* mobile menu icons*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" aria-hidden="true">
                                                <path fill="white" d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill="none" stroke="white" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                            </svg>
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch mt-[1em]">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="h-[4em] w-auto rounded-full"
                                            src="../profile.jpg"
                                            alt="Your Company"
                                        />
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-0">
                                    {/* info modal */}
                                    <Menu as="div" className="relative">
                                        <div>
                                            <Menu.Button className="relative flex rounded-full" onClick={() => setIsOpen(true)}>
                                                <span className="absolute -inset-1.5" />
                                                <img
                                                    className="rounded-full h-[2em]"
                                                    src="../info.png"
                                                    alt="info button"
                                                />
                                            </Menu.Button>
                                        </div>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel>
                            <div className="ml-5 py-2 sm:absolute bg-light-gray">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={'text-white hover:text-light-purple block rounded-md px-6 py-2 text-base font-medium'}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                 <div className="flex justify-center items-center overflow-y-auto fixed overflow-x-hidden inset-0">
                        <div id="modal-wrapper" className="modal-wrapper" onClick={() => setIsOpen(false)}/>
                        <div className="sm:max-w-[70%] md:max-w-[60%] l:max-w-[50%] xl:max-w-[40%] my-auto p-[1em] md:py-[10em]" onClick={() => setIsOpen(false)}>
                            <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-mid-gray border-x-4 border-light-purple">
                                <div className="mx-2 flex items-start justify-between p-3">
                                    <h3 className="text-white text-4xl font-bold mr-5">
                                        About / Info
                                    </h3>
                                    <button
                                        className="text-white text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setIsOpen(false)}
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
                                        <img src="../yorick-small.png" alt="my crude drawing of yorick"/>
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
            </Dialog>
        </>
    )
}
