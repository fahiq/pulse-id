'use client';

import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const videos = [
  {
    src: '/videos/video-1.mp4',
    title: 'Parfaiteria bel',
    city: 'Tokyo',
    rating: '5.0',
    reviews: '120 reviews',
  },
  {
    src: '/videos/video-1.mp4',
    title: 'Ramen Dai',
    city: 'Osaka',
    rating: '4.8',
    reviews: '89 reviews',
  },
  {
    src: '/videos/video-1.mp4',
    title: 'Sushi Saito',
    city: 'Kyoto',
    rating: '4.9',
    reviews: '102 reviews',
  },
];

export default function Carousel3D() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % videos.length);
  const prev = () => setIndex((prev - 1 + videos.length) % videos.length);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  });

  const getPosition = (i) => {
    const offset = ((i - index + videos.length) % videos.length);
    if (offset === 0) return 'center';
    if (offset === 1) return 'right';
    if (offset === 2) return 'left';
    return 'hidden';
  };

  return (
    <>
      <div className="carousel3d-wrapper" {...swipeHandlers}>
        {videos.map((video, i) => {
          const position = getPosition(i);
          return (
            <div key={i} className={`carousel3d-card ${position}`}>
              <video
                className="carousel3d-video"
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
              <div className="carousel3d-gradient"></div>
              <div className="carousel3d-overlay">
              <img src="/images/image.png" className="carousel3d-logo" alt="logo" width={40} height={30} />
                <button className="carousel3d-close">×</button>
              </div>
              <div className="carousel3d-content">
                <div className="carousel3d-city">{video.city}</div>
                <div className="carousel3d-title">{video.title}</div>

                {position === 'center' && (
                  <>
                    <div className="carousel3d-rating">
                      <span className="star">⭐ {video.rating}</span>
                      <span>{video.reviews}</span>
                    </div>
                    <button className="carousel3d-cta">See more →</button>
                  </>
                )}
              </div>

            </div>
          );
        })}
      </div>

      <div className="carousel3d-pagination">
        {videos.map((_, i) => (
          <span key={i} className={i === index ? 'active' : ''}></span>
        ))}
      </div>
    </>
  );
}
