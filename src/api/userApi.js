import { API_PATHS } from './paths';
import { fetcher } from './httpClient';

export const loginUser = async ({ email, password }) => {
  return fetcher({
    url: API_PATHS.LOGIN,
    method: 'POST',
    body: { email, password },
  });
};

export const getProfile = async (token) => {
  return fetcher({
    url: API_PATHS.ME,
    method: 'GET',
    token,
  });
};


export const getUsers = async (token) => {
    return fetcher({
        url: API_PATHS.USERS,
        method: 'GET',
        token,
    });
}