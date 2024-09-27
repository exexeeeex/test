import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CoinsType, CoinType } from '@/app/types/coint';

const url = 'https://api.coinranking.com/v2/';

export const api = createApi({
    reducerPath: 'getAllCoinsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinranking.com/v2/' }),
    endpoints: (builder) => ({
        getAllCoins: builder.query({
            queryFn: async (): Promise<CoinsType | any> => {
                try {
                    const response = await axios.get(url + `coins`);
                    return { data: response.data.data.coins };
                } catch (e: any) {
                    return {
                        error: {
                            status: e.response?.status,
                            data: e.response?.data,
                        },
                    };
                }
            },
        }),
        getCoinByUuid: builder.query({
            queryFn: async (uuid: string): Promise<CoinType | any> => {
                try {
                    const response = await axios.get(url + `coin/${uuid}`);
                    return { data: response.data.data.coin };
                } catch (e: any) {
                    return {
                        error: {
                            status: e.response?.status,
                            data: e.response?.data,
                        },
                    };
                }
            },
        }),
    }),
});

export const { useGetAllCoinsQuery, useGetCoinByUuidQuery } = api;
