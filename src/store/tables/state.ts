import {generateInitData} from 'utils';

import {viewRowsLimit} from 'config/common';

import {CompaniesT} from 'types/redux';

export const initialState:{companies:CompaniesT, viewRowsLimit:number} = {
    companies: generateInitData(3, 5),
    viewRowsLimit
};