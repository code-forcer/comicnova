import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/AdminAuth.module.css';
import Logout from '@/components/Logout';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import axios from 'axios';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [comicTitle, setComicTitle] = useState('');
  const [comicDescription, setComicDescription] = useState('');
  const [comicImage, setComicImage] = useState(null);
  const [comicFile, setComicFile] = useState(null);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!comicTitle || !comicImage || !comicFile) {
      setError('Please provide a title, image, and comic file.');
      return;
    }

    const imageReader = new FileReader();
    const fileReader = new FileReader();

    // Convert the image to Base64
    imageReader.readAsDataURL(comicImage);
    imageReader.onloadend = () => {
      const base64Image = imageReader.result;

      // Convert the file to Base64
      fileReader.readAsDataURL(comicFile);
      fileReader.onloadend = async () => {
        const base64File = fileReader.result;

        // Send the data to the server
        const res = await fetch('/api/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: comicTitle,
            description: comicDescription,
            image: base64Image,
            file: base64File,
          }),
        });

        if (res.status === 201) {
          setSuccess('Comic uploaded successfully!');
          setComicTitle('');
          setComicDescription('');
          setComicImage(null);
          setComicFile(null);
        } else {
          const data = await res.json();
          setError(data.error);
        }
      };
    };

    imageReader.onerror = () => setError('Failed to read the image file.');
    fileReader.onerror = () => setError('Failed to read the comic file.');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    const fetchUserData = async () => {
      const response = await fetch('/api/getuserdetails', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        localStorage.removeItem('token');
        router.push('/admin/login');
      }
    };

    fetchUserData();
  }, [router]);

  return (
    user && (
      <>
        <Header />
        <div className={styles.authContainer}>
          <h1 className={styles.title}>
            Dashboard: Welcome, <span style={{ textDecoration: 'capitalize' }}>{user.name}</span>
          </h1>
          <form onSubmit={handleUpload} className={styles.uploadForm}>
            <input
              type="text"
              placeholder="Comic Title"
              value={comicTitle}
              onChange={(e) => setComicTitle(e.target.value)}
              className={styles.authInput}
            />
            <textarea
              rows="5"
              cols="5"
              placeholder="Comic Description"
              value={comicDescription}
              onChange={(e) => setComicDescription(e.target.value)}
              className={styles.authInput}
            />
            <h4>Comic Image:</h4>
            <input
              type="file"
              onChange={(e) => setComicImage(e.target.files[0])}
              className={styles.authInput}
              accept="image/*"
            />
            <h4>Comic File (PDF):</h4>
            <input
              type="file"
              onChange={(e) => setComicFile(e.target.files[0])}
              className={styles.authInput}
              accept="application/pdf"
            />
            {error && <p className={styles.errorMessage}>{error}</p>}
            {success && <p className={styles.successMessage}>{success}</p>}
            <button type="submit" className={styles.authButton}>Submit</button>
          </form>

          <Logout />
        </div>
        <Footer />
      </>
    )
  );
}
