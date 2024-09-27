import { ButtonType } from '@/app/types/button';
import { Button } from '@/components/ui/button';
import { FC } from 'react';
import styles from './styles.module.scss';

export const ActiveButton: FC<ButtonType> = ({ placeholder, action }) => (
    <Button className={styles.button} onClick={action}>
        {placeholder}
    </Button>
);
