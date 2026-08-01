import React, { useState } from 'react';
import { AnimatePresence, motion } from "motion/react";

const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email = "sandeshsinghh12@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <motion.button
            onClick={copyToClipboard}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className='relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden'
        >
            <AnimatePresence mode='wait'>
                {copied ? (
                    <motion.p
                        key='copied'
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2 }}
                        className='flex items-center justify-center gap-2'
                    >
                        <img src='assets/copy-done.svg' className='w-5' alt='copy icon' loading='lazy' />
                        Email has Copied
                    </motion.p>
                ) : (
                    <motion.p
                        key='copy'
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center gap-2"
                    >
                        <img src="assets/copy.svg" className="w-5" alt="copy icon" loading="lazy" />
                        Copy Email Address
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.button>
    );
}

export default CopyEmailButton