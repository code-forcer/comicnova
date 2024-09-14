import React ,{useState,useEffect} from 'react';
import { useRouter } from 'next/router'; // Import useRouter for navigation
import Header from '../components/Header';
import clientPromise from '../lib/mongodb';
import styles from '../styles/Memes.module.css';
import Marquee from '@/components/Marquee';
import Footer from '@/components/Footer';

const ComicList = ({ comics }) => {
  const router = useRouter();

  // Handle likes
  const handleLike = async (comicId) => {
    try {
      const res = await fetch('/api/comics/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comicId }),
      });

      if (res.ok) {
        window.location.reload(); // Reload to update like count
      }
    } catch (error) {
      console.error('Error liking comic:', error);
    }
  };


  const [filteredComics, setFilteredComics] = useState(comics);
  const { query } = router.query;

  useEffect(() => {
    if (query) {
      const searchQuery = query.toLowerCase();
      const sortedComics = comics
        .map((comic) => ({
          ...comic,
          isMatch: comic.title.toLowerCase().includes(searchQuery),
        }))
        .sort((a, b) => b.isMatch - a.isMatch);

      setFilteredComics(sortedComics);
    } else {
      setFilteredComics(comics);
    }
  }, [query, comics]);

  return (
    <>
      <Header />
      <Marquee />
      <div className={styles.comicContainer}>
        <h1>Comic List</h1>
        {filteredComics.map((comic) => (
          <div className={styles.comicItem} key={comic._id}>
            <h3>
              <span style={{ color: '#0aef', textDecoration: 'underline' }}>Comic Title:</span> {comic.title}
            </h3>
            <img className={styles.comicImage} src={comic.image} alt={comic.title} width="300" />
            <div>
              <span style={{ color: '#ce1212', textDecoration: 'underline' }}>Description:</span> {comic.description || 'No description available'}
            </div>
            <p className={styles.likeSection}>{comic.likes || 0} 👍 Likes</p>
            <button className={styles.likeButton} onClick={() => handleLike(comic._id)}>Like</button>
            <a href={comic.file} download={`${comic.title}.pdf`} className={styles.downloadButton}>
            Download
            </a>

          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const comics = await db.collection('comics').find({}).toArray();

    return {
      props: {
        comics: JSON.parse(JSON.stringify(comics)),
      },
    };
  } catch (error) {
    console.error('Error fetching comics:', error);
    return {
      props: {
        comics: [],
      },
    };
  }
}

export default ComicList;
