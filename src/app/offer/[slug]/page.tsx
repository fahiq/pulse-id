'use client';
import '../../scss/common.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function OfferDetail({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const slug = params.slug;

  const offer = {
    name: "Parfaiteria Bel",
    video: "/videos/Parfaiterial.mp4",
    images: [
      "/images/thumb-1.jpg",
      "/images/thumb-2.jpg",
      "/images/thumb-3.png",
      "/images/thumb-4.jpg",
      "/images/thumb-5.jpg",
      "/images/thumb-6.jpg",
      "/images/thumb-7.jpg",
    ],
    description: "Enjoy an instant 10% discount on purchases of ¥8,000 with your card.",
  };

  const [currentMedia, setCurrentMedia] = useState<{ type: 'video' | 'image'; src: string }>({
    type: 'video',
    src: offer.video,
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const thumbnailsToShow = isExpanded ? offer.images : offer.images.slice(0, 3);
  const hiddenCount = offer.images.length - 3;

  return (
    <div className="offer-detail-wrapper">
      {/* Main Media Display */}
      <div className="offer-header">
        {currentMedia.type === 'video' ? (
          <video
            className="background-video"
            src={currentMedia.src}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <Image
            src={currentMedia.src}
            alt="Selected Media"
            fill
            className="background-image"
          />
        )}

        <button className="go-back-button" onClick={() => router.back()}>
        <Image src="/images/chevron-back.png" alt="back" width={6} height={13} />
        </button>
        <button className="heart-button">♡</button>
        <h1 className="offer-title">Dessert</h1>
      </div>

      {/* Thumbnails */}
      <div className="thumbnail-carousel">
        {/* Video as first thumbnail */}
        <div
          className={`thumbnail-box ${currentMedia.type === 'video' ? 'active' : ''}`}
          onClick={() => setCurrentMedia({ type: 'video', src: offer.video })}
        >
          <video src={offer.video} muted width={60} height={60} />
        </div>

        {/* Image thumbnails */}
        {thumbnailsToShow.map((img, i) => (
          <div
            className={`thumbnail-box ${currentMedia.src === img ? 'active' : ''}`}
            key={i}
            onClick={() => setCurrentMedia({ type: 'image', src: img })}
          >
            <Image src={img} alt={`thumb-${i}`} width={60} height={60} />
          </div>
        ))}

        {/* "+N more" thumbnail */}
        {!isExpanded && hiddenCount > 0 && (
          <div className="thumbnail-box more" onClick={() => setIsExpanded(true)}>
            +{hiddenCount}
          </div>
        )}
      </div>

      {/* Offer Info */}
      <div className="offer-info-block">
        <div className="brand-logo">
          <Image src="/images/pb-logo.jpg" alt="Logo" width={32} height={32} />
          <h2>{offer.name}</h2>
        </div>
        <p>{offer.description}</p>
        <div className="carousel-dots">
          {[...Array(5)].map((_, i) => (
            <span className={`dot ${i === 0 ? 'active' : ''}`} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
