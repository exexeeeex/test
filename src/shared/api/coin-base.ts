import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiInstance {
    private axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            baseURL: `https://api.coinranking.com/v2/`,
        });
    }

    async get<T>(
        endpoint: string,
        options: AxiosRequestConfig = {},
    ): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axios.get(
                endpoint,
                options,
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export const coinApiInstance = new ApiInstance();
