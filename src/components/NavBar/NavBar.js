import React from 'react';
import styles from './NavBar.module.scss';

function NavBar() {
  return (
    <nav class={styles.navbar}>
      <h2 className={styles.logo}>george</h2>
      <ul class={styles.nav}>
        <li class={styles.item}><a href="#">About</a></li>
        <li class={styles.item}><a href="#">Timeline</a></li>
        <li class={styles.item}><a href="#">Work</a></li>
        <li class={styles.item}><a href="#">Blog</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;