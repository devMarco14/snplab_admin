/* eslint-disable prettier/prettier */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getAdminAuthData = () => {
    return axios.get('data/admin.json');
};

function useAdminAuthLoad() {
    return useQuery(['admin'], getAdminAuthData, {
        select: (data) => data.data.admin,
    });
}

export default useAdminAuthLoad;
