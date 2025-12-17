import './Model.css'
import { useRef } from 'react';

function ModelCard({ modelName, modelImage, modelVideo, modelCaption, modelTags, onVideoEnd }) {
    const videoRef = useRef(null);
    const tagsArray = modelTags.split('|');

    const handleMouseEnter = () => {
        if (videoRef.current) videoRef.current.play().catch(() => {});
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div 
            className="carousel-item" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onEnded={onVideoEnd}
            style={{ backgroundImage: `url(${modelImage})` }}
        >
            {modelVideo && (
                <video
                    ref={videoRef}
                    src={modelVideo}
                    className="model-video-bg"
                    muted
                    playsInline
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
                    <i className="ri-arrow-right-wide-line"></i>
                </div>
            </div>
        </div>
    );
}
export default ModelCard;