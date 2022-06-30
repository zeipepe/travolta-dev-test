import styles from './destinations.module.css';

/* eslint-disable-next-line */
export interface DestinationsProps {}

export function Destinations(props: DestinationsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Destinations!</h1>
    </div>
  );
}

export default Destinations;
