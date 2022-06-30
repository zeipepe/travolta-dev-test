import styles from './side-panel.module.css';

/* eslint-disable-next-line */
export interface SidePanelProps {}

export function SidePanel(props: SidePanelProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SidePanel!</h1>
    </div>
  );
}

export default SidePanel;
