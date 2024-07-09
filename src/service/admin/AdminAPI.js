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

      DeleteAdminList = async (data) => {
        const res = await _axios("delete", `/admin/${data.id}?token=${getToken()}`);
        return res;
      };
     
}