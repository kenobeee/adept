import React, {useState} from 'react';

import {Checkbox, Column, Input, Row, Table} from 'components/common/elements';

import {disabledFields} from 'config/common';

import style from './style.module.scss';

import {CompaniesP} from 'types/components';
import {tables} from 'types/common';

export const Companies = (props:CompaniesP) => {
    const {
        companies,
        editRowCB,
        editingTable,
        viewRowsLimit,
        selectedCompanies,
        setSelectedCompanies,
        setSelectedEmployees,
        ...otherProps
    } = props;

    const [inputFields, setInputFields] = useState<{[key:string]:string | number}>({});

    const selectCompany = (selectedId:number) => {
        const isAlreadyHas = selectedCompanies.includes(selectedId);

        setSelectedCompanies(isAlreadyHas
            ? selectedCompanies.filter(id => id !== selectedId)
            : [...selectedCompanies, selectedId]
        );

        isAlreadyHas && setSelectedEmployees([]);
    };

    const isEditing = editingTable === tables.companies;

    return (
        <Table
            {...otherProps}
            isEditing={isEditing}
            type={tables.companies}
            isHidden={companies.length === 0}
            isFullSelected={selectedCompanies.length === companies.length}>
            {companies.slice(0, viewRowsLimit).map(company => {
                const isSelected = selectedCompanies.includes(company.id);

                return (
                    <Row
                        key={company.id}
                        isSelected={isSelected}>
                        {(Object.keys(company) as Array<keyof typeof company>).map((key, c) =>
                            <Column key={c}>
                                {key === 'id'
                                    ? <Checkbox
                                        isDisabled={isEditing}
                                        handle={() => selectCompany(company[key])}
                                        isActive={isSelected}/>
                                    : isEditing && isSelected && !disabledFields.includes(key)
                                        ? <Input
                                            name={key}
                                            value={company[key]}
                                            onEnterDown={editRowCB}
                                            onChange={setInputFields}
                                            inputFields={inputFields}/>
                                        : <span className={style.value}>
                                            {company[key]}</span>}
                            </Column>)}
                    </Row>
                );
            })}
        </Table>
    );
};