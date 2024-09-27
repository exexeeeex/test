import styles from './styles.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <h3>@nickname</h3>
            <img
                src={
                    'https://avatars.mds.yandex.net/i?id=d9b1872bcae859837ca05f43e6850f4b_l-5273084-images-thumbs&n=13'
                }
            />
        </header>
    );
};
