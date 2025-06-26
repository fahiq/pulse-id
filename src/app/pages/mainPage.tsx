'use client';
import { useEffect, useState } from 'react';
import '../scss/common.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
// import VideoCarousel from '../components/infinitCarousal';
import CountryList from '../components/flatList';
import Carousel3D from '../components/infinitCarousal';
// import { ThemeProvider } from '../components/themeContext';
import DarkModeToggle from '../components/DarkModeToggle';


export default function MainPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/myproxy')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched data:', data);
        setData(data);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className='main-wraper'>
      <div className='main-header'>
        <div className='d-flex justify-content-between mt-4'>
          <div className='branding'>
            <Image src="/images/image.png" alt="logo" width={37} height={28} />
          </div>

          <div className='user-profile d-flex'>
            <div className='user-name-greeting-wrap'>
              <div className='user-name'>Hi John Doe</div>
              <div className='user-greeting'>Welcome</div>
            </div>
            <div className='user-avatar'>
              <Image src="/images/avatar.png" alt="profile" width={36} height={36} />
            </div>
          </div>
        </div>
      </div>

      <div className='primary-selector-wrapper'>
        <div className='d-flex justify-content-between'>
          <div className='title-14x'>Discover your City !</div>
          <button className='btn-link'>View All</button>
        </div>
        <main className="flatlist-wrapper">
          <CountryList />
        </main>
      </div>

      <div className='trending-section-wrapper'>
        <div className='title-14x'>Trending Offer</div>
        <main className="min-h-screen p-10 bg-gray-100">
          <Carousel3D />
        </main>
      </div>

      <div className='special-offer-wrapper'>
        <div className='title-14x'>Add card for special offer</div>
        <div className='offer-card mt-3 d-flex justify-content-between'>
          <div className='offer-card-left'>
            <div className='title-orange'>Get Special Offers</div>
            <div className='text-dark mt-1'>
              Many offers waiting for you, get it now
            </div>
            <button className='btn-primary'>Add a card</button>
          </div>
          <div className='offer-card-right'>
            <Image src="/images/Frame-1.png" alt="vector" width={114} height={119} />
            <div className='circle'></div>
          </div>
        </div>
      </div>

      <div className='theme-toggle'>
        <DarkModeToggle />
      </div>
    </div>
  );
}
