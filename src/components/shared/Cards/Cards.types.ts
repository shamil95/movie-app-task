import { ReactNode } from 'react';

export type CardsProps<TData> = {
    className?: string;
    renderNode: (data: TData) => ReactNode;
    columnCount?: number;
    data: TData[];
    itemClassName?: string;
    recordKey: (data: TData) => string | number;
};
