import { ReactNode } from 'react';
import Navigation from '../navigation/navigation';
import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {
  navigationElements?: ReactNode[]
}

export function Header({navigationElements}: HeaderProps) {
  return (
    <header className={styles['header']}>
      <Navigation elements={navigationElements}/>
    </header>
  );
}

export default Header;
