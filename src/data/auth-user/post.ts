import axios from 'axios';
import { API } from '../Config';

interface FORGOT {
  email: string;
}

interface NEWPASSWORD {
  password: string;
  password_confirmation: string;
  code: string;
}

export const requestForgotPassword = async (body: FORGOT) =>
  axios.post(`${API}/request-forgot-password`, body).then((response) => response);

export const forgotPasswordNew = async (body: NEWPASSWORD) =>
  axios.post(`${API}/forgot-password`, body).then((response) => response);
