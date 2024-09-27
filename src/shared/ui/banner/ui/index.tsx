import { FC } from 'react';
import { BannerType } from '../../../../app/types/banner';
import styles from './styles.module.scss';

export const Banner: FC<BannerType> = ({ action, text, img }) => (
    <div onClick={action ? action : null} className={styles.banner}>
        <h3>{text}</h3>
        <img src={img} />
    </div>
);
