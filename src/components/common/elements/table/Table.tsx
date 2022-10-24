import React, {ReactNode, UIEvent} from 'react';
import {useDispatch} from 'react-redux';

import {Checkbox} from 'components/common/elements';

import {mergeClassNames} from 'utils';

import {increaseViewRowsLimit} from 'store/tables/slice';

import style from './style.module.scss';

import {TableP} from 'types/components';

export const Table = (props:TableP & {children:ReactNode}) => {
    const {
        type,
        children,
        isHidden,
        isEditing,
        addNewRowCB,
        deleteRowCB,
        selectAllRows,
        isFullSelected,
        setEditingTable,
        getAvailableToolsCB
    } = props;

    const dispatch = useDispatch();

    const availableTools = getAvailableToolsCB(type);

    const getTableClasses = () =>
        mergeClassNames(
            style.table,
            isHidden ? style.tableHidden : ''
        );

    const getToolStatus = (mode:'edit' | 'delete' | 'add') => !availableTools.includes(mode) || isEditing;

    const scrollHandler = (e:UIEvent<HTMLDivElement>) => {
        const scrollHeight = e.currentTarget.scrollHeight;
        const currentScrollPosition = e.currentTarget.scrollTop;
        const windowHeight = window.innerHeight;

        if (scrollHeight - (currentScrollPosition + windowHeight) < 60) dispatch(increaseViewRowsLimit(10));
    };

    return (
        <section className={getTableClasses()}>
            <header className={style.header}>
                <div className={style.checkbox}>
                    <Checkbox
                        isActive={isFullSelected}
                        label={'Выделить все'}
                        isDisabled={isEditing}
                        handle={() => selectAllRows(type)}/>
                </div>
                <div className={style.tools}>
                    <span
                        className={style.edit}
                        onClick={() => setEditingTable(type)}
                        data-disabled={getToolStatus('edit')}/>
                    <span
                        className={style.delete}
                        onClick={() => deleteRowCB(type)}
                        data-disabled={getToolStatus('delete')}/>
                    <span
                        className={style.add}
                        onClick={() => addNewRowCB(type)}
                        data-disabled={getToolStatus('add')}/>
                </div>
            </header>
            <div
                onScroll={scrollHandler}
                className={style.body}>
                {children}</div>
        </section>
    );
};