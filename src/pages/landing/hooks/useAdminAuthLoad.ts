/* eslint-disable prettier/prettier */
import { HttpRequest } from 'libs/api/httpRequest';
import { useQuery } from '@tanstack/react-query';

const request = new HttpRequest('data/');

const getAdminAuthData = () => {
    return request.get('admin.json');
};

function useAdminAuthLoad() {
    return useQuery(['admin'], getAdminAuthData, {
        select: (data) => data.data.admin,
    });
}

export default useAdminAuthLoad;
