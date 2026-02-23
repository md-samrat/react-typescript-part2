import type { ResponseApi, User } from "../type/user";

export const fetchUser = async (): Promise<ResponseApi<User[]>> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return{
        data,
        status:res.status,
        message:'success'
    }
  } catch (error) {
    return {
      data: [],
      status: 500,
      message: 'failed'
    };
  }
};
