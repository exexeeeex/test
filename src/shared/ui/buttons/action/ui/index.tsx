import { FC } from 'react';
import { ActionButtonType } from '../../../../../app/types/button';
import styles from './styles.module.scss';

export const ActionButton: FC<ActionButtonType> = ({ action, image }) => (
    <div className={styles.button} onClick={action}>
        <img src={image} alt='action' />
    </div>
);
