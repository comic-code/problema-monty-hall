import { useState } from "react";

import styles from '@/styles/Form.module.css';
import Card from "@/components/Card";
import Link from "next/link";
import NumberInput from "@/components/NumberInput";

export default function Form() {
  const [doorsAmount, setDoorsAmount] = useState(3);
  const [doorWithGift, setDoorWithGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor='#c0392c'>
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput text='Quantidade Portas' value={doorsAmount} onChange={newAmount => setDoorsAmount(newAmount)} />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput text='Porta Premiada' value={doorWithGift} onChange={doorWithGift => setDoorWithGift(doorWithGift)} />
        </Card>
        <Card bgColor='#28A085'>
          <Link href={`/game/${doorsAmount}/${doorWithGift}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
