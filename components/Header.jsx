import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserInfo(token);
    }
  }, []);

  const fetchUserInfo = async (token) => {
    try {
      const res = await fetch('/api/user/profile', {
        method: 'GET', // Ensure the method is set to GET
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        console.error('Failed to fetch user info:', res.statusText);
      }
    } catch (error) {
      console.error('Failed to fetch user info:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to the memes page with the search query as a URL parameter
      router.push(`/memes?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <a target="_blank" href="/">
          <span className={styles.logo}>comicNova</span>.<span style={{ color: '#fd7e14' }}>net</span>
        </a>
        <nav className={styles.nav}>
          <ul>
            <li className={router.pathname === '/' ? styles.activeNavItem : ''}>
              <Link href="/">Home</Link>
            </li>
            <li className={router.pathname === '/about' ? styles.activeNavItem : ''}>
              <Link href="/about">About</Link>
            </li>
            <li className={router.pathname === '/memes' ? styles.activeNavItem : ''}>
              <Link href="/memes">Collection</Link>
            </li>

            <li className={router.pathname === '/contact' ? styles.activeNavItem : ''}>
              <Link href="/contact">Contact</Link>
            </li>
            {user ? (
              <li style={{ border: '1px solid #fd7e14', padding: '2px', borderRadius: '5px', fontWeight: 'bold' }}>
                {user.name}
              </li>
            ) : (
              <li style={{ border: '1px solid #fd7e14', padding: '2px', borderRadius: '5px', fontWeight: 'bold' }} className={router.pathname === '/admin/register' ? styles.activeNavItem : ''}>
                <Link href="/admin/register">Signup</Link>
              </li>
            )}
          </ul>
        </nav>

        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            placeholder="Search comics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>Search</button>
        </form>
      </div>
      <ThemeToggle/>
    </header>
  );
};

export default Header;
