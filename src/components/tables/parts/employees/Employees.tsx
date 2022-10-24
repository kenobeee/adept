import React, {useState} from 'react';

import {Checkbox, Column, Input, Row, Table} from 'components/common/elements';

import style from './style.module.scss';

import {tables} from 'types/common';
import {EmployeesP} from 'types/components';

export const Employees = (props:EmployeesP) => {
    const {editRowCB, employees, editingTable, viewRowsLimit, selectedEmployees, setSelectedEmployees, ...otherProps} = props;

    const [inputFields, setInputFields] = useState<{[key:string]:string | number}>({});

    const selectEmployee = (selectedId:number) => {
        const isAlreadyHas = selectedEmployees.includes(selectedId);

        setSelectedEmployees(isAlreadyHas
            ? selectedEmployees.filter(id => id !== selectedId)
            : [...selectedEmployees, selectedId]
        );
    };

    const isEditing = editingTable === tables.employees;

    return (
        <Table
            {...otherProps}
            isEditing={isEditing}
            type={tables.employees}
            isHidden={employees.length === 0}
            isFullSelected={selectedEmployees.length === employees.length}>
            {employees.slice(0, viewRowsLimit).map(employee => {
                const isSelected = selectedEmployees.includes(employee.id);

                return (
                    <Row
                        key={employee.id}
                        isSelected={isSelected}>
                        {(Object.keys(employee) as Array<keyof typeof employee>).map((key, c) =>
                            <Column key={c}>
                                {key === 'id'
                                    ? <Checkbox
                                        isDisabled={isEditing}
                                        handle={() => selectEmployee(employee.id)}
                                        isActive={isSelected}/>
                                    : isEditing && isSelected
                                        ? <Input
                                            name={key}
                                            value={employee[key]}
                                            onEnterDown={editRowCB}
                                            onChange={setInputFields}
                                            inputFields={inputFields}/>
                                        : <span className={style.value}>
                                            {employee[key]}</span>}
                            </Column>)}
                    </Row>
                );
            })}
        </Table>
    );
};