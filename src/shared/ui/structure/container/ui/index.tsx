import { FC } from 'react';

export const Container: FC<React.PropsWithChildren> = ({ children }) => (
    <section style={{ padding: '20px 10px' }}>{children}</section>
);
