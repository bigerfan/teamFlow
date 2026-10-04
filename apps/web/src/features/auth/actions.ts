import axiosInstance from "@/src/lib/axios";
import { SignupUserData, Routes } from "@teamFlow/shared";

export const createUser = async (userInfo: SignupUserData) => {
  try {
    console.log(userInfo);
    const res = await axiosInstance.post(`${Routes.auth.signup}`, {
      ...userInfo,
    });
    console.log(res);
    console.log(res);
  } catch (error) {}
};
