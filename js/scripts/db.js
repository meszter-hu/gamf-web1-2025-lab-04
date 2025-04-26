const apiUrl = 'https://nettuts.hu/jms/meszter-hu/';

export const getAll = (entity = 'users') => {
    return fetch(apiUrl + entity).then(res => res.json());
};