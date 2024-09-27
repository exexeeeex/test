import { ActionButton } from '../../../shared/ui/buttons';
import styles from './styles.module.scss';

import send from './send.svg';
import plus from './plus.svg';
import exhange from './exchange.svg';

export const ActionButtons = () => (
    <section className={styles.place}>
        <ActionButton image={send} action={undefined} />
        <ActionButton image={plus} action={undefined} />
        <ActionButton image={exhange} action={undefined} />
    </section>
);
