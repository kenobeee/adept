import React, {ReactNode} from 'react';

import {mergeClassNames} from 'utils';

import style from './style.module.scss';

import {RowP} from 'types/components';

export const Row = (props:RowP & {children:ReactNode}) => {
    const {children, isSelected} = props;

    const getRowStyles = () =>
        mergeClassNames(
            style.row,
            isSelected ? style.rowSelected : ''
        );

    return (
        <div className={getRowStyles()}>
            {children}</div>
    );
};