import React, { children } from 'react';
import styles from'./Layout.module.scss';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';


const Layout=({children})=> {
  return (
    <div className={styles.grid_container}>
      <header className={styles.header}>
        <Header/>
      </header>
      <aside className={styles.sidebar}>
        <ul>
          <li><Link to="/">Dashbaord</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
        </ul>
      </aside>
      <main className={styles.content}>
        <h1>{children}</h1>
      </main>
      <footer className={styles.footer}>
        <Footer/>
      </footer>
    </div>
  );
}

export default Layout;
