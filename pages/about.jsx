// src/pages/about.js
import Footer from '@/components/Footer';
import Header from '../components/Header';
import styles from '../styles/About.module.css';
import Marquee from '@/components/Marquee';

export default function About() {
  return (
    <>
      <Header />
      <Marquee/>
      <div className={styles.container}>
        <section className={styles.aboutUsSection}>
          <h1 className={styles.aboutTitle}>About Us</h1>
          <p className={styles.aboutText}>
            Welcome to <span className={styles.bold}>comicnova</span>, your go-to platform for reading and downloading a wide variety of comics and books. At <span className={styles.bold}>comicnova</span>, we are passionate about delivering an enjoyable reading experience to comic lovers worldwide.
          </p>

          <h2 className={styles.aboutSubheading}>Why Choose Us?</h2>
          <ul className={styles.aboutList}>
            <li className={styles.aboutListItem}>
              <span className={styles.bold}>Vast Collection:</span> We offer an extensive library of comics and books across various genres, ensuring that you’ll always find something to enjoy.
            </li>
            <li className={styles.aboutListItem}>
              <span className={styles.bold}>User-Friendly Platform:</span> Our platform is easy to navigate, making it simple to find, read, and download your favorite comics.
            </li>
            <li className={styles.aboutListItem}>
              <span className={styles.bold}>Community-Driven:</span> We believe in fostering a community of comic enthusiasts. Share your thoughts, discover new titles, and connect with like-minded readers.
            </li>
          </ul>

          <h2 className={styles.aboutSubheading}>Our Mission</h2>
          <p className={styles.aboutText}>
            Our mission at <span className={styles.bold}>comicnova</span> is to provide a seamless comic reading experience by making a wide selection of comics accessible to everyone. Whether you are here to read or download, we aim to be your ultimate destination for comic enjoyment.
          </p>

          <h2 className={styles.aboutSubheading}>Join Us Today</h2>
          <p className={styles.aboutText}>
            Dive into the world of comics with <span className={styles.bold}>comicnova</span>. Whether you're an avid reader or new to comics, there's something here for everyone. Sign up today and start exploring our library!
          </p>

          <h2 className={styles.aboutSubheading}>Have Questions?</h2>
          <p className={styles.aboutText}>
            We’re here to help. If you have any questions or need support, don’t hesitate to reach out. At <span className={styles.bold}>comicnova</span>, your satisfaction is our top priority.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
