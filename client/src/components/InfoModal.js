import React from "react";

export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <img src="profile.jpg" className="absolute rounded-full max-w-[4em] mx-5 mb-5 top-5 right-0"
                alt="shiorin"
                onClick={() => setShowModal(true)}>
            </img>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0">
                        <div className="modal-wrapper" onClick={() => setShowModal(false)}></div>
                        <div className="max-w-xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-mid-gray outline-none focus:outline-none">
                                <div className="mx-2 flex items-start justify-between p-3">
                                    <h3 className="text-white text-4xl font-bold mr-5">
                                        About / Information
                                    </h3>
                                    <button
                                        className="text-white text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="block text-white opacity-50">×</span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <p className="text-white text-lg">
                                    Some description here
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
