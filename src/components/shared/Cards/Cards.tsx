import classNames from 'classnames';
import React, { useMemo } from 'react';
import { CardsProps } from './Cards.types';
import { generateGridColumns } from '../../../utils/renderTs';
import styles from './Cards.module.scss';

const Cards = <TData,>(props: CardsProps<TData>) => {
    const { renderNode, columnCount = 3, data, className, itemClassName, recordKey } = props;

    const gridColumns = useMemo(() => {
        return generateGridColumns(data, columnCount);
    }, [data, columnCount]);

    return (
        <div className={classNames(styles.container, className)}>
            {gridColumns.map(column => (
                <div key={column.id} className={styles.column} style={{ width: 100 / columnCount + '%' }}>
                    {column.data.map(data => (
                        <div key={recordKey(data)} className={classNames(styles.card, itemClassName)}>
                            {renderNode(data)}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Cards;
