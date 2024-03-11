import React, { ComponentPropsWithRef } from 'react';

export type IconPlacement = 'left' | 'right';

export type InputProps = Omit<ComponentPropsWithRef<'input'>, 'className'> & {
    className?: string;
    icon?: React.JSX.Element;
    iconPlacement?: IconPlacement;
};
