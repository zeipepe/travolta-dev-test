import { HotelSearch } from '@travolta-test-dev/components';
import styles from './home.module.css';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <main className={styles['container']}>
      <h1>We love to travel as much as you do</h1>
      <p>
        We <em>CREATE</em> unbeatable deals you will not get anywhere else - so
        you can save your money for an unforgettable travel experience
      </p>
      <div className={styles['search']}>
        <HotelSearch />
      </div>
    </main>
  );
}

export default Home;
