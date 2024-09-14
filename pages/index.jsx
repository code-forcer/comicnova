import React from 'react';
import Header from '../components/Header';
import ComicList from '../components/ComicList';
import Carousel from '../components/Carousel';
import Marquee from '@/components/Marquee';
import styles from '../styles/Home.module.css';
import Footer from '@/components/Footer';
import GetAppSection from '@/components/GetAppSection';
import PopularItemsSection from '@/components/PopularItemsSection';
import DisplayAd from '@/components/DisplayAd';
import SliderReels from '@/components/Sliderreels';

const Home = () => {
  const carouselImages = [
    '/comicwebimages/www_wallpaperflare_com/movie-spider-man-into-the-spider-verse-marvel-comics-miles-morales-spider-man-hd-wallpaper-thumb (6).jpg',
    '/comicwebimages/www_wallpaperflare_com/costume-air-spider-man-spider-man-teen-hd-wallpaper-preview.jpg',
    '/comicwebimages/www_wallpaperflare_com/spider-man-marvel-comics-miles-morales-spiderverse-hd-wallpaper-thumb.jpg',
    '/comicwebimages/www_wallpaperflare_com/feature3.jpg',
    // Add more comic-related image paths here...
  ];

  const ads = [
    {
      tags: ['Comics', 'Download'],
      title: 'Discover the Best Comics',
      description: 'Read and download your favorite comics only on comicnova.com.',
      imageUrl: '/comicwebimages/www_wallpaperflare_com/movie-spider-man-into-the-spider-verse-gwen-stacy-marvel-comics-miles-morales-hd-wallpaper-thumb (1).jpg',
    },
    {
      tags: ['Exclusive', 'Releases'],
      title: 'Get Exclusive Releases',
      description: 'Sign up today to access exclusive new comic releases and collections.',
      imageUrl: '/comicwebimages/www_wallpaperflare_com/red-black-costume-hero-mask-hd-wallpaper-thumb.jpg',
    },
    {
      tags: ['Community', 'Reviews'],
      title: 'Share Your Thoughts',
      description: 'Join the comicnova community and share your reviews on the latest comics.',
      imageUrl: '/comicwebimages/www_wallpaperflare_com/movie-spider-man-into-the-spider-verse-gwen-stacy-marvel-comics-miles-morales-hd-wallpaper-thumb (1).jpg',
    },
  ];

  return (
    <div>
      <Header />
      <main style={{ fontFamily: "'Oswald', system-ui", color: '#fd7e14', padding: '20px' }}>
        <Marquee />
        {/* Main Section */}
        <div className={styles.homepageContainer}>
          <section className={styles.heroSection}>
            <div className={styles.heroText}>
              <h1>Welcome to comicnova.com</h1>
              <p>Your ultimate platform for discovering, reading, and downloading comics. Dive into a world of excitement and adventure with our vast collection of comics. Explore today!</p>
              <a href="/admin/register" className={styles.ctaButton}>Join Us Today <img src="/radix/fire.svg" width={'20px'} alt="Network icon" /></a>
            </div>
            <div className={styles.heroImage}>
              <img width="400px" src="/comicwebimages/www_wallpaperflare_com/movie-spider-man-into-the-spider-verse-miles-morales-peni-parker-wallpaper-thumb.jpg" alt="Comics" />
            </div>
          </section>

          {/* Carousel */}
          <Carousel images={carouselImages} />

          {/* Featured Comics Section */}
          <h2 style={{
            fontFamily: "'Oswald', system-ui", padding: '5px', textAlign: 'center', fontWeight: 'bold',
            color: '#fd7e14', textDecoration: 'underline'
          }}>
            Featured Comics
          </h2>
          <img src="/radix/thick-arrow-right.svg" width={'20px'} alt="Arrow icon" />
          <ComicList />

          <br />
          <section className={styles.featuresSection}>
            <h1>Why Choose comicnova.com?</h1>
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <img src="/comicwebimages/www_wallpaperflare_com/movie-spider-man-into-the-spider-verse-miles-morales-peni-parker-spider-gwen-hd-wallpaper-thumb.jpg" alt="Vast Collection" />
                <h3>Vast Comic Collection</h3>
                <p>Access thousands of comics across different genres and styles.</p>
              </div>
              <div className={styles.featureItem}>
                <img src="/comicwebimages/www_wallpaperflare_com/spider-man-artwork-superhero-peter-parker-gwen-stacy-hd-wallpaper-thumb.jpg" alt="Exclusive Content" />
                <h3>Exclusive Content</h3>
                <p>Enjoy exclusive comics and early releases only available on our platform.</p>
              </div>
              <div className={styles.featureItem}>
                <img src="/comicwebimages/www_wallpaperflare_com/feature3.jpg" alt="Community and Reviews" />
                <h3>Community and Reviews</h3>
                <p>Connect with other comic fans and share your thoughts on your favorite stories.</p>
              </div>
            </div>
          </section>

          {/* Popular Items Section */}
          <PopularItemsSection />

          {/* Display Ads */}
          <DisplayAd ads={ads} />

          {/* Slider */}
          <SliderReels/>

          {/* Get App Section */}
          <GetAppSection />
          <section className={styles.callToActionSection}>
            <h2><b>Ready to Start Reading?</b></h2>
            <p>Join comicnova.com today to start reading and downloading comics!</p>
            <a href="/admin/register" className={styles.ctaButton}>Get Started</a>
          </section>
        </div>

        {/* Ends here */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
