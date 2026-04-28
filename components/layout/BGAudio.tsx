"use client";
import React, { useState } from "react";
import {Volume2,VolumeOff} from 'lucide-react';

const BGAudio: React.FC = () => {
    const [isAudioMuted, setIsAudioMuted] = useState(false);

    return (
        <>
            <div
                className="fixed bottom-6 left-6 z-50"
                style={{}}
            >
                <button
                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-lg transition-colors duration-300 flex items-center justify-center"
                    aria-label={isAudioMuted ? "Unmute background audio" : "Mute background audio"}
                    onClick={e => {
                        e.stopPropagation();
                        setIsAudioMuted(prev => !prev);
                    }}
                >
                    {isAudioMuted ? (
                        // Mute (Ludice style)
                        <VolumeOff className="w-6 h-6 text-gray-700" />
                    ) : (
                        // Unmute (Ludice style)
                       <Volume2 className="w-6 h-6 text-gray-700" />
                    )}
                </button>
            </div>
            {/* Background Audio */}
            <audio
                src="/bg.mp3"
                autoPlay
                loop
                muted={isAudioMuted}
                style={{ display: 'none' }}
                id="background-audio"
            />
        </>
    );
};

export default BGAudio;