import { ReactNode } from 'react';
import styles from './navigation.module.css';

/* eslint-disable-next-line */
export interface NavigationProps {
  children?: ReactNode;
}

export function Navigation({children}: NavigationProps) {
  return (
    <nav className={styles['container']}>
      {children}
    </nav>
  );
}

export default Navigation;
