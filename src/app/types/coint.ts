export type CoinsType = {
    status?: string;
    data: {
        coins: CoinListType[];
    };
};

type CoinListType = {
    data: {
        uuid: string;
        symbol: string;
        name: string;
        iconUrl: string;
        price: string;
        btcPrice: string;
        sparkline: string[];
    };
};

export type CoinType = {
    uuid: string;
    symbol: string;
    name: string;
    iconUrl: string;
    price: string;
    btcPrice: string;
    sparkline: string[];
};
