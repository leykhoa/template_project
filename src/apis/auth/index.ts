import { AxiosResponse } from 'axios';

import axiosInstance from '../../config.api';
import { LoginRequest } from './requests/login.request';
import { LoginResponse } from './responses/login.response';
import { ENDPOINT, RESOURCE } from '../endpoint.api';
import { handleErrorApi } from '../../utilities/error.util';

const loginApi = async (requestBody: LoginRequest): Promise<LoginResponse> => {

  try {
    return await  axiosInstance
    .post(RESOURCE.AUTH + ENDPOINT.LOGIN, requestBody)
  } catch (error) {
    handleErrorApi(error)
  }
  
};

export { loginApi };
