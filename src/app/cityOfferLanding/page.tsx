'use client';
export const dynamic = 'force-dynamic'; 
import '../scss/common.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import React from 'react';

export default function CityOfferLanding() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const city = searchParams.get('city') || 'Tokyo';

  const offers = [
    {
      image: "/images/dessert.png",
      name: "Parfaiteria Bel",
      tags: ["Dessert", "Exclusive"],
    },
    {
      image: "/images/muji.jpg",
      name: "Muji",
      tags: ["Retail", "Exclusive"],
    },
    {
      image: "/images/shiseido.jpg",
      name: "Shiseido",
      tags: ["Beauty", "Exclusive"],
    },
    {
      image: "/images/kose.png",
      name: "Kosé",
      tags: ["Beauty", "Exclusive"],
    },
  ];

  const categories = ["All", "Dessert", "Beauty", "Retail"];

  return (
    <div className='main-wrapper-pages'>
      {/* Header Section */}
      <div className='sub-header'>
        <Image src="/images/sub-header.jpg" alt="Header" width={500} height={161} />

        <button className="go-back-button" onClick={() => router.back()}>
        <Image src="/images/chevron-back.png" alt="back" width={6} height={13} />
        </button>

        <div className='city-title'>{city}</div>
      </div>

      {/* Special Offers */}
      <div className='section-wrapper'>
      <div className="special-offers-section">
        <h2 className="section-heading">Special Offers!</h2>
        <div className="offer-banner">
          <div className="offer-left">
            <p className="brand-name"><Image src="/images/sk-2.png" alt="Model" width={20} height={20} /> SK-II </p>
            <div className="offer-text mb-1">Get Special Offer</div>
            <p className="discount-text">Up to 9% discount</p>
            <button className="btn-view-more">View More</button>
          </div>
          <div className="offer-right">
            <Image src="/images/modal.png" alt="Modal" width={200} height={250} />
          </div>
        </div>
        <div className="carousel-dots">
          <span className="dot active" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>

      {/* Category Filters */}
      <div className="category-section">
        <h2 className="section-heading mt-1">Explore {city}’s Best Category</h2>
        <div className="category-buttons">
          {categories.map((cat, index) => (
            <button key={index} className="category-btn">
                <Image src="/images/chip-1.png" alt="Header" width={26} height={26} />
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Offers Grid */}
      <div className="offers-grid">
        {offers.map((offer, index) => {
          const slug = offer.name.toLowerCase().replace(/\s+/g, '-');

          return (
            <Link href={`/offer/${slug}`} key={index} className="offer-card-link">
              <div className="offer-card">
                <div className="offer-image">
                  <div className='offer-logo d-flex'>
                  <Image src="/images/offer-logo.jpg" alt="logo" width={30} height={30} />
                  <div className='offer-title ml-2'>
                  <h4>{offer.name}</h4>
                  </div>
                  </div>
                  <Image src={offer.image} alt={offer.name} width={500} height={500} />
                  <span className="heart-icon">♡</span>
             
                </div>
                <div className="offer-info">
                  <p>Get 10% discount with card</p>
                  <div className="tags">
                    {offer.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      </div>

    </div>
  );
}
