import React from 'react';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[10%] px-2 md:px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
            <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
            <div className="flex space-x-4">
                <button
                    className="flex items-center bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" style={{borderRadius: '2px'}}/>
                    </svg>
                    Play
                </button>
                <button
                    className="flex items-center bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="white" fill="transparent"/>
                        <text x="12" y="16" textAnchor="middle" fontSize="10" fill="white" fontFamily="Arial">i</text>
                    </svg>
                    More Info
                </button>
            </div>
        </div>
    );
};


export default VideoTitle;