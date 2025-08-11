import { useQuery } from "@tanstack/react-query";
import {getUsers} from '../api/userApi'

export const useUsersQuery = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
      });
}