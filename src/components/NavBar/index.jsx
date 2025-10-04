import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Plus } from 'lucide-react';
import logo from '../../assets/logo.svg';
import styles from './style.module.css';

const NavBar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/AddBox', label: 'Add Box', icon: Plus }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.logoSection}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <span className={styles.brandName}>Shipping</span>
        </div>

        <div className={styles.navItems}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
