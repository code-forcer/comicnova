import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Link from 'next/link';

const SliderReels = () => {
    const companies = [
    {
        id: 1,
        image: '/comicwebimages/www_wallpaperflare_com/spider-man-into-the-spider-verse-miles-morales-spider-man-spider-gwen-wallpaper-thumb.jpg',
        title: 'The Adventures of Crimson',
        description: 'Follow Crimson as he battles villains in a futuristic world full of danger and excitement.',
    },
    {
        id: 2,
        image: '/comicwebimages/www_wallpaperflare_com/movie-spider-man-into-the-spider-verse-marvel-comics-miles-morales-spider-man-hd-wallpaper-thumb (6).jpg',
        title: 'Mystic Lands: The Awakening',
        description: 'Embark on a mystical journey where ancient magic meets modern-day heroes.',
    },
    {
        id: 3,
        image: '/comicwebimages/www_wallpaperflare_com/movie-spider-man-into-the-spider-verse-gwen-stacy-marvel-comics-miles-morales-hd-wallpaper-thumb (1).jpg',
        title: 'Cyber Warriors',
        description: 'A team of elite hackers and soldiers join forces to take down a rogue AI threatening the world.',
    },
    {
        id: 4,
        image: '/comicwebimages/www_wallpaperflare_com/spider-man-marvel-comics-miles-morales-spiderverse-hd-wallpaper-thumb.jpg',
        title: 'Legends of Terra',
        description: 'Explore the epic saga of warriors fighting to protect their planet from invading forces.',
    },
];
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000, // Delay between slides in milliseconds
                disableOnInteraction: false, // Allows continuous scrolling even after interaction
            }}
            loop={true} // Enable continuous loop mode
            style={{ width: '100%', height: '300px' }}
        >
            {companies.map(company => (
                <SwiperSlide key={company.id}>
                    <div className="card" style={{ width: '100%', height: '100%', textAlign: 'center' }}>
                        <img src={company.image} alt={company.title} className="card-img-top" style={{ maxHeight: '150px', width: 'auto', margin: 'auto' }} />
                        <div className="card-body">
                            <h5 className="card-title">{company.title}</h5>
                            <p className="card-text">{company.description}</p>
                            <Link href={`/companies/${company.id}`} className="btn btn-primary">Learn More</Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderReels;
