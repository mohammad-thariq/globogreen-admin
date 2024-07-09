import React, { useState } from "react";
import {
  AdvertisementSideOptions,
  AdvertisementSideOptionsEnum,
} from "@/constant/statusConst";
import { useMutation } from "react-query";
import { ToastifyFailed, ToastifySuccess } from "@/common/Toastify";
import { SliderSidebarBannerOneForm } from "../Forms/SliderSidebarBannerOneForm";
import { SidebarOptions } from "../SidebarOptions";
import { SliderSidebarBannerTwoForm } from "../Forms/SliderSidebarBannerTwoForm";
import { HomepageTwoColumnbannerOne } from "../Forms/HomePageTwoColumnbannerOneForm";
import { PopularCategoriesSidebarBannerForm } from "../Forms/PopularCategoriesSidebarBannerForm";
import { HomepageTwoColumnBannerTwoForm } from "../Forms/HomepageTwoColumnBannerTwoForm";
import { HomepageSingleBannerOneForm } from "../Forms/HomepageSingleBannerOneForm";
import { HomepageSingleBannerTwoForm } from "../Forms/HomepageSingleBannerTwoForm";
import { MegaMenuBannerForm } from "../Forms/MegaMenuBannerForm";
import { HomepageFlashSaleSidebarBannerForm } from "../Forms/HomepageFlashSaleSidebarBannerForm";
import { ShopPageCenterBannerForm } from "../Forms/ShopPageCenterBannerForm";
import { ShopPageSidebarBannerForm } from "../Forms/ShopPageSidebarBannerForm";
import { AdvertisementAPI } from "@/service/advertisement/AdvertisementAPI";

export const SidebarSetup = ({ onData }) => {
  const {
    updateSliderBannerOne,
    updateSliderBannerTwo,
    updatePopularCategorySidebar,
    updateHomepagecolFirstBanner,
    updateHomepagecolSecondBanner,
    updateHomepagesingleFirstBanner,
    updateHomepagesingleSecondBanner,
    updateShoppageCenterbanner,
    updateShoppagesidebarBanner,
    updateMegaMenuBanner,
  } = new AdvertisementAPI();
  const [toggleSettings, setToggleSettings] = useState(
    "sliderSidebarBannerOne"
  );

  const handleToggleOptions = (form) => {
    setToggleSettings(form);
  };

  const getCurrentActive = (toggleSettings) => {
    if (onData?.hasOwnProperty(toggleSettings)) {
      if (
        toggleSettings == AdvertisementSideOptionsEnum.sliderSidebarBannerTwo
      ) {
        console.log("triggered");
        // console.log(onData[GeneralSettingSideOptionsEnum.setting], "setting")
        return onData[AdvertisementSideOptionsEnum.sliderSidebarBannerOne];
      } else {
        console.log("triggered-inner");
        return onData[toggleSettings];
      }
    }
  };
  // update updateSliderBannerOneMutate
  const {
    mutate: updateSliderBannerOneMutate,
    isLoading: updateSliderBannerOneLoading,
  } = useMutation(updateSliderBannerOne, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.notification);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.notification);
    },
  });

  // update updateSliderBannerTwo

  const {
    mutate: updateSliderBannerTwoMutate,
    isLoading: updateSliderBannerTwoLoading,
  } = useMutation(updateSliderBannerTwo, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.notification);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.notification);
    },
  });

  // update updatePopularCategorySidebar

  const {
    mutate: updatePopularCategorySidebarMutate,
    isLoading: updatePopularCategorySidebarLoading,
  } = useMutation(updatePopularCategorySidebar, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.notification);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.notification);
    },
  });

  // update updateHomepagecolFirstBanner

  const {
    mutate: updateHomepagecolFirstBannerMutate,
    isLoading: updateHomepagecolFirstBannerLoading,
  } = useMutation(updateHomepagecolFirstBanner, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.notification);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.notification);
    },
  });

  // update updateHomepagecolSecondBanner

  const {
    mutate: updateHomepagecolSecondBannerMutate,
    isLoading: updateHomepagecolSecondBannerLoading,
  } = useMutation(updateHomepagecolSecondBanner, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.notification);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.notification);
    },
  });

  // update updateHomepagesingleFirstBanner

  const {
    mutate: updateHomepagesingleFirstBannerMutate,
    isLoading: updateHomepagesingleFirstBannerLoading,
  } = useMutation(updateHomepagesingleFirstBanner, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.notification);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.notification);
    },
  });

  // update updateHomepagesingleSecondBanner

  const {
    mutate: updateHomepagesingleSecondBannerMutate,
    isLoading: updateHomepagesingleSecondBannerLoading,
  } = useMutation(updateHomepagesingleSecondBanner, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.notification);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.notification);
    },
  });

  // update updateMegaMenuBanner

  const {
    mutate: updateMegaMenuBannerMutate,
    isLoading: updateMegaMenuBannerLoading,
  } = useMutation(updateMegaMenuBanner, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.notification);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.notification);
    },
  });

  // update updateShoppageCenterbanner

  const {
    mutate: updateShoppageCenterbannerMutate,
    isLoading: updateShoppageCenterbannerLoading,
  } = useMutation(updateShoppageCenterbanner, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.notification);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.notification);
    },
  });

  // update updateShoppagesidebarBanner

  const {
    mutate: updateShoppagesidebarBannerMutate,
    isLoading: updateShoppagesidebarBannerLoading,
  } = useMutation(updateShoppagesidebarBanner, {
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
              {AdvertisementSideOptions.map((i, index) => (
                <SidebarOptions
                  key={index}
                  data={i}
                  onClick={handleToggleOptions}
                  active={i?.value === toggleSettings}
                />
              ))}
            </div>
            <div className="p-3 w-70">
              {currentActive &&
                toggleSettings ===
                  AdvertisementSideOptionsEnum.sliderSidebarBannerOne && (
                  <SliderSidebarBannerOneForm
                    onData={currentActive}
                    onUpdate={updateSliderBannerOneMutate}
                    loading={updateSliderBannerOneLoading}
                  />
                )}

              {toggleSettings ===
                AdvertisementSideOptionsEnum.sliderSidebarBannerTwo && (
                <SliderSidebarBannerTwoForm
                  onData={onData && onData?.sliderSidebarBannerTwo}
                  onUpdate={updateSliderBannerTwoMutate}
                  loading={updateSliderBannerTwoLoading}
                />
              )}
              {toggleSettings ===
                AdvertisementSideOptionsEnum.popularCategorySidebarBanner && (
                <PopularCategoriesSidebarBannerForm
                  onData={onData && onData?.popularCategorySidebarBanner}
                  onUpdate={updatePopularCategorySidebarMutate}
                  loading={updatePopularCategorySidebarLoading}
                />
              )}
              {toggleSettings ===
                AdvertisementSideOptionsEnum.homepageTwoColumnBannerOne && (
                <HomepageTwoColumnbannerOne
                  onData={onData && onData?.homepageTwoColumnBannerOne}
                  onUpdate={updateHomepagecolFirstBannerMutate}
                  loading={updateHomepagecolFirstBannerLoading}
                />
              )}
              {toggleSettings ===
                AdvertisementSideOptionsEnum.homepageTwoColumnBannerTwo && (
                <HomepageTwoColumnBannerTwoForm
                  onData={onData && onData?.homepageTwoColumnBannerTwo}
                  onUpdate={updateHomepagecolSecondBannerMutate}
                  loading={updateHomepagecolSecondBannerLoading}
                />
              )}
              {toggleSettings ===
                AdvertisementSideOptionsEnum.homepageSingleBannerOne && (
                <HomepageSingleBannerOneForm
                  onData={onData && onData?.homepageSingleBannerOne}
                  onUpdate={updateHomepagesingleFirstBannerMutate}
                  loading={updateHomepagesingleFirstBannerLoading}
                />
              )}
              {toggleSettings ===
                AdvertisementSideOptionsEnum.homepageSingleBannerTwo && (
                <HomepageSingleBannerTwoForm
                  onData={onData && onData?.homepageSingleBannerTwo}
                  onUpdate={updateHomepagesingleSecondBannerMutate}
                  loading={updateHomepagesingleSecondBannerLoading}
                />
              )}
              {toggleSettings ===
                AdvertisementSideOptionsEnum.megaMenuBanner && (
                <MegaMenuBannerForm
                  onData={onData && onData?.megaMenuBanner}
                  onUpdate={updateMegaMenuBannerMutate}
                  loading={updateMegaMenuBannerLoading}
                />
              )}
              {/* {toggleSettings ===
                AdvertisementSideOptionsEnum.homepageFlashSaleSidebarBanner && (
                <HomepageFlashSaleSidebarBannerForm
                  onData={onData && onData?.homepageFlashSaleSidebarBanner}
                  onUpdate={updateMegaMenuBannerMutate}
                loading={updateMegaMenuBannerLoading}
                />
              )} */}
              {toggleSettings ===
                AdvertisementSideOptionsEnum.shopPageCenterBanner && (
                <ShopPageCenterBannerForm
                  onData={onData && onData?.shopPageCenterBanner}
                  onUpdate={updateShoppageCenterbannerMutate}
                  loading={updateShoppageCenterbannerLoading}
                />
              )}
              {toggleSettings ===
                AdvertisementSideOptionsEnum.shopPageSidebarBanner && (
                <ShopPageSidebarBannerForm
                  onData={onData && onData?.shopPageSidebarBanner}
                  onUpdate={updateShoppagesidebarBannerMutate}
                  loading={updateShoppagesidebarBannerLoading}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
