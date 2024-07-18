import styles from '@/styles/Game.module.css';
import { use, useEffect, useState } from "react";

import Door from "@/components/Door";
import { createDoors, refreshDoors } from "@/functions/doors";
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Game() {
  const router = useRouter();
  const [doors, setDoors] = useState([]);
  const [isValid, setIsValid] = useState(false);

  function renderDoors() {
    return doors.map(door => {
      return <Door key={door.number} value={door} onChange={(newDoor) => {
        setDoors(refreshDoors(doors, newDoor))}
      } />
    })
  }

  useEffect(() => {
    const doors = +router.query.doors;
    const haveGift = +router.query.haveGift;

    const amountValidDoors = doors >= 3 && doors <= 100;
    const validGift = haveGift >= 1 && haveGift <= doors;

    setIsValid(amountValidDoors && validGift);
  }, [doors]);

  useEffect(() => {
    const doors = +router.query.doors;
    const haveGift = +router.query.haveGift;
    setDoors(createDoors(doors, haveGift));
  }, [router?.query])

  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {isValid ? renderDoors() : <h2>Valores Inválidos</h2>}
      </div>
      <div className={styles.buttons}>
        <Link href='/'>
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
