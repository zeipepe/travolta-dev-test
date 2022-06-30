import styles from './hotel-list-item.module.css';

/* eslint-disable-next-line */
export interface HotelListItemProps {}

export function HotelListItem(props: HotelListItemProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HotelListItem!</h1>
    </div>
  );
}

export default HotelListItem;
