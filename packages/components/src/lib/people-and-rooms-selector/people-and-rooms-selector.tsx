import styles from './people-and-rooms-selector.module.css';

/* eslint-disable-next-line */
export interface PeopleAndRoomsSelectorProps {}

export function PeopleAndRoomsSelector(props: PeopleAndRoomsSelectorProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PeopleAndRoomsSelector!</h1>
    </div>
  );
}

export default PeopleAndRoomsSelector;
