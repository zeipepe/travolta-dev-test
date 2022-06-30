import styles from './date-picker.module.css';

/* eslint-disable-next-line */
export interface DatePickerProps {}

export function DatePicker(props: DatePickerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DatePicker!</h1>
    </div>
  );
}

export default DatePicker;
