import './Model.css'
import { useRef, useEffect } from 'react';

function ModelCard({ modelName, modelImage, modelVideo, modelCaption, modelTags, onVideoEnd, isActive, className, videoIsPlaying, setVideoIsPlaying }) {
    const videoRef = useRef(null);
    const tagsArray = modelTags.split('|');

    useEffect(() => {
        if (!videoRef.current) return;

        const isTouch = window.matchMedia("(pointer: coarse)").matches;

        if (isActive) {
            if (isTouch) {
                videoRef.current.play()
                .then(() => setVideoIsPlaying(true))
                .catch(() => setVideoIsPlaying(false));
            }
            else {
                setVideoIsPlaying(false);
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            setVideoIsPlaying(false);
        }
    }, [isActive, setVideoIsPlaying]);

    const handleEnded = () => {
        setVideoIsPlaying(false);
        if (onVideoEnd) onVideoEnd();
    }

    const handleMouseEnter = () => {
        if (isActive && videoRef.current) {
            videoRef.current.play().then(() => setVideoIsPlaying(true));
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            setVideoIsPlaying(false);
        }
    };

    return (
        <div 
            className={`carousel-item ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ backgroundImage: `url(${modelImage})` }}
        >
            {modelVideo && (
                <video
                    ref={videoRef}
                    src={modelVideo}
                    className={`model-video-bg ${(isActive && videoIsPlaying) ? 'is-playing' : ''}`}
                    muted
                    playsInline
                    onEnded={handleEnded}
                />
            )}
            <div className="model-gradient top" />
            <div className="model-gradient bottom" style={{ rotate: "180deg" }} />
            <div className="model-info-wrapper">
                <div className="model-title">
                    <h3 className="model-name">{modelName}</h3>
                    <p className="model-caption">{modelCaption}</p>
                </div>
                <div className="tags-wrapper">
                    <div className="tags-container">
                        {tagsArray.map((tag, tagIndex) => (
                            <p key={tagIndex} className="model-tag">{tag}</p>
                        ))}
                    </div>
                    <i className="ri-arrow-right-wide-line model-arrows"></i>
                </div>
            </div>
        </div>
    );
}
export default ModelCard;