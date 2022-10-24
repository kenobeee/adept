import {GetAvailableToolsT} from 'types/utils';

export const getAvailableTools:GetAvailableToolsT = (selectedQty) => {
    if (selectedQty === 0) return ['add'];
    else if (selectedQty === 1) return ['delete', 'edit'];

    return ['delete'];
};