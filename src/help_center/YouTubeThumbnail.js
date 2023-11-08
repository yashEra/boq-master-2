import React from "react";
import "./styles/YouTubeThumbnail.css";

const YouTubeThumbnail = () => {
  const videoLinks = [
    "https://youtu.be/ouhkzuULHnA",
    "https://youtu.be/ljOtCfFxdFA",
    "https://youtu.be/7qfaXbH9_7A",
    "https://youtu.be/pFwjxkOD4mA",
  ];

  return (
    <div className="VideoContainer">
      {videoLinks.map((videoLink, index) => (
        <div className={`VideoThumbnail video-${index + 1}`} key={index}>
          {/* Extract video ID from the video link */}
          {videoLink && (
            <>
              {/* <p>Video {index + 1}</p> */}
              <a href={videoLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://img.youtube.com/vi/${getVideoIdFromLink(
                    videoLink
                  )}/mqdefault.jpg`}
                  alt="Video Thumbnail"
                />
              </a>
            </>
          )}
        </div>
      ))}     
    </div>
  );
};

// Extract video ID from the video link
const getVideoIdFromLink = (videoLink) => {
  const videoIdRegex = /(?:\?v=|&v=|\/embed\/|\.be\/)([\w-]{11})/;
  const match = videoLink.match(videoIdRegex);
  return match && match[1];
};

export default YouTubeThumbnail;
 