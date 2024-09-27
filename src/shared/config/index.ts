const production = process.env.NODE_ENV === 'production';

export const API_URL = production
    ? 'https://api.investon.ru/api/'
    : 'http://localhost:5000/api/';
