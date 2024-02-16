import { ReactNode } from 'react';

type Size = 'small' | 'medium' | 'large'

export type WidgetsProps = {
    children: ReactNode;
    title?: string;
    description?: string;
    size?: Size
};
