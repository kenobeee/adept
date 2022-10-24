import React from 'react';

import {mergeClassNames} from 'utils';

import style from './style.module.scss';

import {CheckboxP} from 'types/components';

export const Checkbox = (props:CheckboxP) => {
    const {label = '', handle, isActive, isDisabled} = props;
    
    const getCheckboxStyles = () =>
        mergeClassNames(
            style.checkbox,
            isActive ? style.checkboxActive : '',
            isDisabled ? style.checkboxDisabled : '',
        );

    return (
        <div className={style.wrapper}>
            <span
                className={getCheckboxStyles()}
                onClick={() => handle()}/>
            {label && <span className={style.label}>{label}</span>}
        </div>
    );
};