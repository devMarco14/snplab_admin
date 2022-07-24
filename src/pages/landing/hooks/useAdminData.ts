/* eslint-disable prettier/prettier */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getAdminData = () => {
    return axios.get('data/admin.json');
};

function useAdminData() {
    return useQuery(['admin'], getAdminData, {
        select: (data) => data.data.admin,
    });
}

export default useAdminData;
