import { localStorageConst } from "@/constant/localStorage";
import { _axios } from "@/helper/axios";
import { LocalStorageHelper } from "@/utils/localStorage";

const getToken = () => {
  let token = LocalStorageHelper.getItem(localStorageConst.JWTADMIN);
  return token;
};

export class SmsConfigAPI {
  smsConfig = async () => {
    const res = await _axios("get", `/sms-notification?token=${getToken()}`);
    return res;
  };

  updateTwilioSmsConfig = async (data) => {
    const res = await _axios(
      "put",
      `/update-twilio-configuration?token=${getToken()}`,
      data
    );
    return res;
  };

  updateBiztechSmsConfig = async (data) => {
    const res = await _axios(
      "put",
      `/update-biztech-configuration?token=${getToken()}`,
      data
    );
    return res;
  };

  smsTemplate = async () => {
    const res = await _axios("get", `/sms-template?token=${getToken()}`);
    return res;
  };

  smsTemplateById = async ({ queryKey }) => {
    const res = await _axios(
      "get",
      `/edit-sms-template/${queryKey[1]}?token=${getToken()}`
    );
    return res;
  };

  updateSmsTemplateById = async (data) => {
    const res = await _axios(
      "put",
      `/ update-sms-template/${data.id}?token=${getToken()}`,
      data
    );
    return res;
  };
}
