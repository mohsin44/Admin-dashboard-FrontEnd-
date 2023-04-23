import React, { useEffect, useState } from 'react';
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake, faSearch,faBell } from "@fortawesome/free-solid-svg-icons";
import Button from '../ui/button/Button';
import {  useLocation } from 'react-router-dom';

const Header = () => {
  const [pageTitle, setPageTitle] = useState(document.title);
  const location=useLocation()

  const pathName={
    "/":"Dashboard",
    "/products":"Products",
    "/orders":"Orders"
  }

  useEffect(()=>{
    if(location.pathname in pathName){
      setPageTitle(pathName[location.pathname])
    }
  },[location])
  
 
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <h3>
            <FontAwesomeIcon icon={faSnowflake} />
          </h3>
          <h2>Ecommerce</h2>
        </div>
        <div className={styles.page_title}>
        <h2>{pageTitle}</h2>
        </div>
        <div className={styles.search_container}>
        <button type="submit">
          <FontAwesomeIcon className={styles.faSearch} icon={faSearch} />
          </button>
          <input type="text" placeholder="Search..." />
        </div>
        <div className={styles.rightend_container}>
        <FontAwesomeIcon className={styles.faBell} icon={faBell} />
        <Button button_name="Login"/>
        </div>
      </div>
    </>
  );
};

export default Header;
