import React, { useState } from "react";
import { SideOptions } from "../sideOptions";
import {
  GeneralSettingSideOptions,
  GeneralSettingSideOptionsEnum,
} from "@/constant/statusConst";
import { SettingsForm } from "../Forms/SettingsForm";
import { LogoAndFaviconsForm } from "../Forms/LogoAndFaviconForm";
import { ThemeColorForm } from "../Forms/ThemeColorForm";
import { CookieConsentForm } from "../Forms/CookieConsentForm";
import { GoogleRecaptchaForm } from "../Forms/GoogleRecaptchaForm";
import { PushCredentialForm } from "../Forms/PusherCredentialForm";
import { BlogCommentForm } from "../Forms/BlogCommentForm";
import { TawkChatForm } from "../Forms/TawkChatForm";
import { GoogleAnalyticForm } from "../Forms/GoogleAnalyticForm";
import { CustomPaginationForm } from "../Forms/CustomPaginationForm";
import { SocialLinksForm } from "../Forms/SocialLoginForm";
import { FacebookPixelForm } from "../Forms/FacebookPixelForm";
import { DatabaseGenerateForm } from "../Forms/DatabaseGenerateForm";
import { AppSetingAPI } from "@/service/appSettings/AppSettingAPI";
import { useMutation } from "react-query";
import { ToastifyFailed, ToastifySuccess } from "@/common/Toastify";

export const Settings = ({ onData }) => {
  const { updateSetting } = new AppSetingAPI();
  const [toggleSettings, setToggleSettings] = useState("setting");

  const handleToggleOptions = (form) => {
    setToggleSettings(form);
  };

  const getCurrentActive = (toggleSettings) => {
    if (onData?.hasOwnProperty(toggleSettings)) {
      if (toggleSettings == GeneralSettingSideOptionsEnum.logoAndFavicon) {
        console.log("triggered");
        // console.log(onData[GeneralSettingSideOptionsEnum.setting], "setting")
        return onData[GeneralSettingSideOptionsEnum.setting];
      } else {
        console.log("triggered-inner");
        return onData[toggleSettings];
      }
    }
  };

  const { mutate: updateSettingMutate, isLoading: updateSettingLoading } =
    useMutation(updateSetting, {
      onSuccess: (data, variables, context) => {
        ToastifySuccess(data?.notification);
      },
      onError: (data, variables, context) => {
        ToastifyFailed(data?.notification);
      },
    });

  const currentActive = getCurrentActive(toggleSettings);
  console.log(onData, "onData");
  return (
    <div className="container-fluid py-4">
      <div className="card">
        <div className="card-body p-3">
          <div className="flex align-item-start mx-4 w-100 gap-4">
            <div className="p-3">
              {GeneralSettingSideOptions.map((i, index) => (
                <SideOptions
                  key={index}
                  data={i}
                  onClick={handleToggleOptions}
                  active={i?.value === toggleSettings}
                />
              ))}
            </div>
            <div className="p-3 w-70">
              {currentActive &&
                toggleSettings === GeneralSettingSideOptionsEnum.setting && (
                  <SettingsForm
                    onData={currentActive}
                    currencies={onData.currencies}
                    onUpdate={updateSettingMutate}
                    loading={updateSettingLoading}
                  />
                )}
              {/* { toggleSettings ===
                  GeneralSettingSideOptionsEnum.logoAndFavicon && (
                  <LogoAndFaviconsForm onData={onData} />
                )} */}
                 {toggleSettings === GeneralSettingSideOptionsEnum.logoAndFavicon && (
                <LogoAndFaviconsForm  onData={onData}/>
              )}
              {toggleSettings === GeneralSettingSideOptionsEnum.themeColor && (
                <ThemeColorForm  onData={onData}/>
              )}
              {toggleSettings ===
                GeneralSettingSideOptionsEnum.cookieConsent && (
                <CookieConsentForm onData={currentActive} />
              )}
              {toggleSettings ===
                GeneralSettingSideOptionsEnum.googleRecaptcha && (
                <GoogleRecaptchaForm onData={currentActive}/>
              )}
              {toggleSettings === GeneralSettingSideOptionsEnum.pusher && (
                <PushCredentialForm  onData={currentActive}  />
              )}
              {toggleSettings ===
                GeneralSettingSideOptionsEnum.facebookComment && (
                <BlogCommentForm onData={currentActive}/>
              )}
              {toggleSettings === GeneralSettingSideOptionsEnum.tawkChat && (
                <TawkChatForm onData={currentActive} />
              )}
              {toggleSettings ===
                GeneralSettingSideOptionsEnum.googleAnalytic && (
                <GoogleAnalyticForm onData={currentActive}/>
              )}
              {toggleSettings ===
                GeneralSettingSideOptionsEnum.customPaginations && (
                <CustomPaginationForm onData={currentActive} />
              )}
              {toggleSettings === GeneralSettingSideOptionsEnum.socialLogin && (
                <SocialLinksForm onData={currentActive} />
              )}
              {toggleSettings ===
                GeneralSettingSideOptionsEnum.facebookPixel && (
                <FacebookPixelForm  onData={currentActive} />
              )}
              {toggleSettings === GeneralSettingSideOptionsEnum.dataBase && (
                <DatabaseGenerateForm onData={currentActive} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
