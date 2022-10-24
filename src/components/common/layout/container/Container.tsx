import React, {ReactNode} from 'react';

import styles from './style.module.scss';

type ContainerP = {children:ReactNode};

export const Container = ({children}:ContainerP) => <div className={styles.container}>{children}</div>;
