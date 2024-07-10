import { localStorageConst } from "@/constant/localStorage";
import { _axios } from "@/helper/axios";
import { LocalStorageHelper } from "@/utils/localStorage";

const getToken = () => {
  let token = LocalStorageHelper.getItem(localStorageConst.JWTADMIN)
  return token
}

export class AdminAPI {
    adminList = async () => {
        const res = await _axios("get", `/admin?token=${getToken()}`);
        return res;
      };

      createAdmin = async (data) => {
        const res = await _axios("post", `/admin?token=${getToken()}`, data);
        return res;
      };
      updateAdmin = async (data) => {
        const res = await _axios("put", `/admin/${data.id}?token=${getToken()}`, data);
        return res;
      };

      DeleteAdminList = async (data) => {
        const res = await _axios("delete", `/admin/${data.id}?token=${getToken()}`);
        return res;
      };
     
}