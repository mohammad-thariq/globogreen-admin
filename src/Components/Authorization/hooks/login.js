import { ToastifyFailed, ToastifySuccess } from "@/common/Toastify";
import { localStorageConst, userData } from "@/constant/localStorage";
import { Reload, Redirect } from "@/helper/base";
import { AuthorizationApi } from "@/service/auth/auth";
import { LocalStorageHelper } from "@/utils/localStorage";
import { BaseUrls } from "../../../../env";

const { login } = new AuthorizationApi();

export const handleLogin = async (data) => {
  try {
    const res = await login(data);
    console.log(res);
    // Assuming res is structured with error handling as per your API response
    if (res.error) {
      ToastifyFailed(`${res.error}`);
      Reload();
    } else {
      LocalStorageHelper?.setItem(localStorageConst.JWTADMIN, res?.access_token);
      LocalStorageHelper?.setItem(localStorageConst.EXPIREIN, res?.expires_in);
      const user = {
        id: res.admin.id,
        name: res.admin.name,
        email: res.admin.email,
        avatar: `${BaseUrls.BASE_URL}/${res.admin.image}`,
      };
      LocalStorageHelper?.setItem(localStorageConst.USER, user);
      ToastifySuccess(`Welcome Back ${user.name}`);
      Redirect("/");
    }
  } catch (error) {
    // Handle errors thrown by _axios
    ToastifyFailed(`${error.message}`);
    Reload();
  }
};
