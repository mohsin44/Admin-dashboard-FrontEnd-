import React from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Ecommerce -<span> My Website</span></p>
    </div>
  );
};

export default Footer;
