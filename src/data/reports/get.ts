import axios from 'axios';
import { API } from '../Config';
import { getCookie } from '../../hooks/useCookie';

export const getReports = async () => {
    const token = getCookie('token');
    return axios
      .get(`${API}/get-reports`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response);
};