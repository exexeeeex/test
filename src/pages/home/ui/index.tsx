import { Banner } from '../../../shared/ui/banner';
import { ActionButtons } from '../../../widgets/action-buttons';
import { Balance } from '../../../widgets/balance';
import { ActiveButton } from '@/shared/ui/buttons/active';
import { useGetAllCoinsQuery, useGetCoinByUuidQuery } from '@/shared/api/coin';
import { CoinType } from '@/app/types/coint';
import { CryptoButton } from '@/shared/ui/buttons';
import { useState } from 'react';
import styles from './styles.module.scss';

import graphic from './graphic.svg';

export const HomePage = () => {
    const [coinsCount, setCoinsCount] = useState<number>(5);
    const {
        data: coins,
        isError,
        isFetching,
        refetch,
    } = useGetAllCoinsQuery({});

    return (
        <main className={styles.place}>
            <div className={styles.place__balance}>
                <Balance balance={10000} />
                <ActionButtons />
            </div>
            <div className={styles.place__crypto}>
                <Banner img={graphic} text={'Зарабатываем деньги за вас!'} />
                {coins &&
                    coins.slice(0, 5).map((coin: CoinType) => (
                        <CryptoButton
                            key={coin.uuid}
                            item={{
                                userCount: 50,
                                coinPrice: parseInt(coin.price),
                                iconUri: coin.iconUrl,
                                uuid: coin.uuid,
                                name: coin.name,
                                symbol: coin.symbol,
                            }}
                        />
                    ))}
                <ActiveButton
                    placeholder={'Загрузить ещё'}
                    action={undefined}
                />
            </div>
        </main>
    );
};
