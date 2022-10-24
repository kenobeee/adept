import React, {ReactNode} from 'react';

import style from './style.module.scss';

type MainP = {children:ReactNode};

export const Main = ({children}:MainP) => <main className={style.main}>{children}</main>;