import classnames from 'classnames';
import React from 'react';
import { SpinProps } from './Spin.types';
import styles from './Spin.module.scss';

const Spin: React.FC<SpinProps> = ({ className, spinning }) => {
    return (
        <div className={classnames('spin', styles.container, className)}>
            <span className={classnames(styles.spinElement, { [styles.spinning]: spinning })}></span>
        </div>
    );
};

export default Spin;
