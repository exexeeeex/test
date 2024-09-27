import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_URL } from '../config';

class ApiInstance {
    private axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            baseURL: API_URL,
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
    async post<T>(
        endpoint: string,
        data?: any,
        options: AxiosRequestConfig = {},
    ): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axios.post(
                endpoint,
                data,
                options,
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async delete<T>(
        endpoint: string,
        options: AxiosRequestConfig = {},
    ): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axios.delete(
                endpoint,
                options,
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
export const apiInstance = new ApiInstance();
