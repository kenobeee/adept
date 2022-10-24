import React, {ReactNode} from 'react';

import style from './style.module.scss';

type WrapperP = {children:ReactNode};

export const Wrapper = ({children}:WrapperP) => <div className={style.wrapper}>{children}</div>;