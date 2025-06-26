/* eslint-disable @next/next/no-img-element */

'use client';

import { useRouter } from 'next/navigation';

const cities = [
  { name: 'Hokkaido', image: '/images/Hokkaido.jpg' },
  { name: 'Tokyo', image: '/images/tokyo.jpg' },
  { name: 'Osaka', image: '/images/osaka.jpg' },
  { name: 'Kyoto', image: '/images/kyoto.jpg' },
  { name: 'Fukuoka', image: '/images/fukuoka.jpg' },
];

export default function CountryList() {
  const router = useRouter();

  const handleClick = (cityName: string) => {
    router.push(`/cityOfferLanding?city=${encodeURIComponent(cityName)}`);
  };

  return (
    <div className="country-list">
      {cities.map((city, index) => (
        <div
          key={index}
          className="country-item"
          onClick={() => handleClick(city.name)}
          style={{ cursor: 'pointer' }}
        >
          <img
            src={city.image}
            alt={city.name}
            className="country-flag"
          />
          <span>{city.name}</span>
        </div>
      ))}
    </div>
  );
}
