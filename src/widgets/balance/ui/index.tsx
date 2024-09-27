import { FC } from 'react';
import styles from './styles.module.scss';

type Balance = {
    balance: number;
};
export const Balance: FC<Balance> = ({ balance }) => (
    <div className={styles.block}>
        <h3>USDT</h3>
        <h1>
            {new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'USD',
            }).format(balance)}
        </h1>
    </div>
);
