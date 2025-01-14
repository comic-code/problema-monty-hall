import DoorModel from '@/model/door';
import styles from '../styles/Door.module.css';
import Gift from './Gift';

interface DoorProps {
  value: DoorModel
  onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
  const door = props.value;
  const isSelected = door.isSelected && !door.isOpened ? styles.selected : '';

  const toggleSelected = () => props.onChange(door.toggleSelected());
  const openDoor = (e) => {
    e.stopPropagation();
    props.onChange(door.open())
  };

  function renderDoor() {
    return (
      <div className={styles.door}>
        <div className={styles.number}>
          {door.number}
        </div>
        <div className={styles.doorHandle} onClick={openDoor} />
      </div>
    )
  }
  
  return (
    <div className={styles.area} onClick={toggleSelected}>
      <div className={`${styles.frame} ${isSelected}`}>
        {!door.isOpened ? renderDoor() 
          : door.haveGift ? <Gift /> : false}
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}