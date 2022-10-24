import React, {ReactNode} from 'react';

import style from './style.module.scss';

type ColumnP = {children:ReactNode};

export const Column = ({children}:ColumnP) => <div className={style.column}>{children}</div>;