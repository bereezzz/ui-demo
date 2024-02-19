import { ReactNode } from 'react';

type Size = 'small' | 'medium' | 'large'

export type WidgetsProps = {
    children: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    size?: Size
};
