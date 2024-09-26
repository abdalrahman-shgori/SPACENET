import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TypingText = ({ text, duration, sx }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = duration / text.length;

        const typing = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index += 1;

            if (index === text.length) {
                clearInterval(typing);
            }
        }, interval);

        return () => clearInterval(typing);
    }, [text, duration]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            sx={sx}
        >
            {displayedText}
        </motion.div>
    );
};

export default TypingText;
