import { ReactNode } from 'react';
import styles from './navigation.module.css';

/* eslint-disable-next-line */
export interface NavigationProps {
  elements?: ReactNode[];
}

export function Navigation({elements}: NavigationProps) {
  return (
    <nav className={styles['nav']}>
      {elements&&<ul>
        {elements.map(element=>(
          <li>{element}</li>
        ))}
      </ul>}
    </nav>
  );
}

export default Navigation;
