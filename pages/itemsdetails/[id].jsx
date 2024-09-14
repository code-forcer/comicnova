import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';
import styles from '../../styles/ItemDetails.module.css'; // Adjust the path to your CSS module
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ItemDetails = ({ item }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch user data from local storage, a context, or an API to determine if they are logged in
    const userData = localStorage.getItem('user'); // Assuming user info is stored in localStorage
    setUser(userData ? JSON.parse(userData) : null);
  }, []);

  if (!item) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <Marquee />
      <div className={styles.container}>
        <h1 className={styles.headername}>Comic's Details Page.</h1>
        <div className={styles.imageContainer}>
          <img src={item.image} alt={item.title} className={styles.image} />
        </div>
        <h1><b>Comic~Info:</b></h1>
        <div className={styles.detailsContainer}>
          <h1 className={styles.title}><b>{item.name}</b></h1>
          <p className={styles.description}>{item.description}</p>
           <a href={item.file} download={`${item.file}.pdf`} className={styles.orderButton}>Download</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ItemDetails;

// Fetch the item data from the database based on the item ID from the URL
export async function getServerSideProps(context) {
  const { id } = context.params; // Retrieve the ID from the route

  // Fetch item details from the database using the item ID
  const res = await fetch(`http://localhost:3000/api/items/${itemid}`); // Adjust the URL to match your API endpoint
  const item = await res.json();

  if (!item) {
    return {
      notFound: true, // This will show a 404 page if no item is found
    };
  }

  return {
    props: {
      item,
    },
  };
}
