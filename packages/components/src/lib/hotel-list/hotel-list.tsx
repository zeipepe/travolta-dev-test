import styles from './hotel-list.module.css';

/* eslint-disable-next-line */
export interface HotelListProps {}

export function HotelList(props: HotelListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HotelList!</h1>
    </div>
  );
}

export default HotelList;
