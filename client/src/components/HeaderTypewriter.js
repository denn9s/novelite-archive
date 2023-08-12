import React, { useState, useEffect } from 'react';

const HeaderTypewriter = ({ text, delay }) => {
    const [current_text, setCurrentText] = useState('');
    const [current_index, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (current_index < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[current_index]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [current_index, delay, text]);

    return <h1 className="mt-24 text-5xl font-bold text-white">{current_text}</h1>;
};

export default HeaderTypewriter;