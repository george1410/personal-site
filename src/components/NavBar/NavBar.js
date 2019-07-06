import React from 'react';
import styles from './NavBar.module.scss';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>George</h2>
      <ul className={styles.nav}>
        <li className={styles.item}><a href="#about">About</a></li>
        <li className={styles.item}><a href="#">Timeline</a></li>
        <li className={styles.item}><a href="#">Work</a></li>
        <li className={styles.item}><a href="#">Blog</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;