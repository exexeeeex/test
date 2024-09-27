import { FC, useState } from 'react';
import { CryptoButtonType } from '../../../../../app/types/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import { Bar, BarChart, CartesianGrid, Tooltip } from 'recharts';
import { useGetCoinByUuidQuery } from '@/shared/api/coin';
import styles from './styles.module.scss';

type Props = {
    item: CryptoButtonType;
};
export const CryptoButton: FC<Props> = ({ item }) => {
    const [sparkline, setSparkline] = useState<number[]>([]);
    const [coinUuid, setCoinUuid] = useState<string>('');

    const {
        data: coin,
        isLoading,
        isSuccess,
    } = useGetCoinByUuidQuery(coinUuid.length > 1 ? coinUuid : '', {
        skip: coinUuid?.length <= 0,
    });
    const getCoinByUuid = () => {
        setCoinUuid(item.uuid);
        setSparkline(coin && coin.sparkline.map(Number));
    };

    const chartData =
        sparkline &&
        sparkline.map((value) => ({
            Цена: value,
        }));

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <div onClick={getCoinByUuid} className={styles.button}>
                    <div className={styles.button__main}>
                        <div className={styles.button__main__avatar}>
                            <img src={item.iconUri} />
                        </div>
                        <h1>{item.userCount}</h1>
                    </div>
                    <div className={styles.button__additional}>
                        <h1 className={styles.button__additional__price}>
                            {new Intl.NumberFormat('en-IN', {
                                style: 'currency',
                                currency: 'USD',
                            }).format(item.coinPrice)}
                        </h1>
                    </div>
                </div>
            </DrawerTrigger>
            <DrawerContent className={styles.button__drawer}>
                <DrawerHeader>
                    <DrawerTitle style={{ color: 'white' }}>
                        График цены монеты
                    </DrawerTitle>
                </DrawerHeader>
                {isLoading && !isSuccess ? (
                    <p>Loading..</p>
                ) : (
                    <>
                        <BarChart
                            width={400}
                            height={300}
                            data={chartData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid stroke='#f5f5f5' />
                            <Tooltip />
                            <Bar dataKey='Цена' fill='#8884d8' />
                        </BarChart>
                    </>
                )}
                <DrawerFooter>
                    <DrawerClose className={styles.button__drawer__close}>
                        Закрыть
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
