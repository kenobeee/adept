import {GenerateEmployeeT} from 'types/utils';

export const generateEmployee:GenerateEmployeeT = (id) => ({
    id,
    lastName: `Фамилия №${id}`,
    firstName: `Имя №${id}`,
    position: `Позиция №${id}`
});