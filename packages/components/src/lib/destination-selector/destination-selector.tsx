import styles from './destination-selector.module.css';

/* eslint-disable-next-line */
export interface DestinationSelectorProps {}

export function DestinationSelector(props: DestinationSelectorProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DestinationSelector!</h1>
    </div>
  );
}

export default DestinationSelector;
